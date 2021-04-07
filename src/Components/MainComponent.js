import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { DISHES } from '../shared/Dishes'
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';
import DishDetailComponent from './DishDetailComponent'
import Header from './Header'
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './HomeComponent'
import Contact from './ContactUs';
import About from './AboutUs';

export class MainComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {

            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    render() {


        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }

        const DishWithId = ({ match }) => {
            return <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}>
            </DishDetailComponent>
        }

        return (



            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <MenuComponent dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={() => <Contact/>}/>
                    <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
                    <Redirect to="/home" />
            </Switch>
                <Footer />
            </div>
        )
    }
}

export default MainComponent
