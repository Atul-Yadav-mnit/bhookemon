import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle ,BreadcrumbItem,Breadcrumb} from 'reactstrap'
import {Link} from'react-router-dom'


function RenderDish({ dish }) {

    return (

        <div>
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

function RenderComment({comments}) {


    const com = comments.map((comment) => {
        return (
            <div>
                <h5>{comment.author} </h5>
                <h7>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h7>
                <p>{comment.comment}</p>
            </div>
        )

    })


    return (

        <div>
            <h1>Comments</h1>
            <hr></hr>
            {com}
        </div>

    )
}

function DishDetailComponent({ dish, comments }) {

    if (dish == null) {
        return (
            <div className="container">
            </div>
        )
    }



    return (
        <div className="container">
            <div className="row mt-3">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-md-6 col-sm-12 mt-5">
                    <RenderComment comments={comments} />
                </div>
            </div>
        </div>

    )
}

export default DishDetailComponent
