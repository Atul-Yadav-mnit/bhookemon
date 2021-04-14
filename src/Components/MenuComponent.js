import React from 'react'
import { Card, CardBody, CardImg, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Loading } from './LoadingComponent';


function RenderDish({ dish }) {
    return (
        <div>
            <Link to={`/menu/${dish.id}`} >
                <Card>
                    <CardImg top width="100%" src={dish.image} alt="Dish Image" />
                    <CardBody>
                        <CardTitle tag="h5">{dish.name}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">{dish.price}</CardSubtitle>
                    </CardBody>
                </Card>
            </Link>
        </div>
    )
}



function MenuComponent({ dishes ,dishErr,dishesLoading}) {

    var Menu;

    if(dishesLoading)
    {
        Menu = <div>
            <Loading/>
        </div>
    }
    else if(dishErr)
    {
        Menu = <div>
            {dishErr}
        </div>
    }
    else
    {
        Menu = dishes.map((dish) => {
            return (

                    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 mt-5" >
                        <RenderDish dish={dish} />
                    </div>

                


            );
        })
    }




    return (
        <div className="container">
            <div className="row mt-3">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="row">

                {Menu}
            </div>
        </div>
    )
}

export default MenuComponent
