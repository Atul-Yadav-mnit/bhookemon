import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap'


function RenderDish({ dish, onClick }) {
    return (
        <div  onClick={() => onClick(dish.id)}>
            <Card>
                <CardImg top width="100%" src={dish.image} alt="Dish Image" />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{dish.price}</CardSubtitle>
                    <CardText ht-50>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}



function MenuComponent({ dishes, selectedDish, onClick }) {

    const Menu = dishes.map((dish) => {
        return (
            <div className="col-md-6 col-sm-12 mt-5">
                <RenderDish dish={dish} onClick={onClick} />
            </div>

        );
    })




    return (
        <div className="container">
            <div className="row">
                {Menu}
            </div>
        </div>
    )
}

export default MenuComponent
