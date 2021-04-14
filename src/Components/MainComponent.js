import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import DishDetailComponent from './DishDetailComponent'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import Home from './HomeComponent'
import Contact from './ContactUs';
import About from './AboutUs';
import { connect } from 'react-redux'
import * as ActionCreater from '../Redux/ActionCreater'


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add_comment: (dishId, rating, author, comment) => dispatch(ActionCreater.AddComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(ActionCreater.FetchDishes()),
        fetchPromotions: () => dispatch(ActionCreater.fetchPromotions()),
        fetchLeaders: () => dispatch(ActionCreater.fetchLeaders()),
        fetchComments : () => dispatch(ActionCreater.fetchComments())
    }
}


export class MainComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    componentDidMount = () => {
        this.props.fetchDishes();
        this.props.fetchPromotions();
        this.props.fetchLeaders();
        this.props.fetchComments();
    }

    render() {


        const HomePage = () => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    dishErr={this.props.dishes.errmsg}
                    dishesLoading={this.props.dishes.isLoading}
                    promotionsErr={this.props.promotions.errmsg}
                    promotionsLoading={this.props.promotions.isLoading}
                    leadersErr={this.props.leaders.errmsg}
                    leadersLoading={this.props.leaders.isLoading}
                />
            )
        }

        const DishWithId = ({ match }) => {
            return <DishDetailComponent
                dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                add_comment={this.props.add_comment}
                dishErr={this.props.dishes.errmsg}
                dishesLoading={this.props.dishes.isLoading}
                commentErr={this.props.comments.errmsg}
                commentsLoading={this.props.comments.isLoading}
            >
            </DishDetailComponent>
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <MenuComponent dishes={this.props.dishes.dishes} dishErr={this.props.dishes.errmsg}
                        dishesLoading={this.props.dishes.isLoading} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={() => <Contact />} />
                    <Route path="/aboutus" component={() => <About leaders={this.props.leaders.leaders}  leadersErr={this.props.leaders.errmsg} leadersLoading={this.props.leaders.isLoading}/> } />
                    <Redirect to="/home" />
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent))
