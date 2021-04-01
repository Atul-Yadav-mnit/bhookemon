import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap'





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

function RenderComment({ dish }) {


    const comments = dish.comments.map((comment) => {
        return (
            <div>
                <h5>{comment.author} </h5>
                <h7>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</h7>
                <p>{comment.comment}</p>
            </div>
        )

    })

    console.log(comments);

    return (

        <div>
            <h1>Comments</h1>
            {comments}
        </div>

    )
}

function DishDetailComponent({ dish }) {

    if (dish == null) {
        return (
            <div className="container">
            </div>
        )
    }



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 mt-5">
                    <RenderDish dish={dish} />
                </div>
                <div className="col-md-6 col-sm-12 mt-5">
                    <RenderComment dish={dish} />
                </div>
            </div>
        </div>

    )
}

export default DishDetailComponent
