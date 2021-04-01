import React, { Component } from 'react'
import MenuComponent from './MenuComponent'
import { Navbar, NavbarBrand } from 'reactstrap'
import { DISHES } from '../shared/Dishes'
import DishDetailComponent from './DishDetailComponent'

export class MainComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    render() {

        const onClick = (dishId) => {
            this.setState({
                selectedDish: dishId
            })
        }

        


        

        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Bhookemon</NavbarBrand>
                    </div>
                </Navbar>
                <MenuComponent dishes={this.state.dishes} selectedDish={this.state.selectedDish} onClick={(dishId) => onClick(dishId)} />
                <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
            </div>
        )
    }
}

export default MainComponent
