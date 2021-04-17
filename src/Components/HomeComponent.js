import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { baseURL } from '../Redux/baseURL';
import { Loading } from './LoadingComponent';

function RenderCard({item}) {

    return(

        <Card>
            <CardImg src={baseURL+item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {

    var Dish;
    if(props.dishesLoading === true)
    {
      Dish = <div>
        <Loading/>
        </div>
    }
    else if(props.dishErr)
    {
        Dish = <p>{props.dishErr}</p>
    }
    else
    {
        Dish = <RenderCard item={props.dish} />
    }

    var Promo;
    if(props.promotionsLoading === true)
    {
      Promo = <div>
        <Loading/>
        </div>
    }
    else if(props.promotionsErr)
    {
        Promo = <p>{props.promotionsErr}</p>
    }
    else
    {
        Promo = <RenderCard item={props.promotion} />
    }

    var Leader;
    if(props.leadersLoading === true)
    {
      Leader = <div>
        <Loading/>
        </div>
    }
    else if(props.leadersErr)
    {
        Leader = <h3>{props.leadersErr}</h3>
    }
    else
    {
        Leader = <RenderCard item={props.leader} />
    }

    return(
        <div className="container mt-5">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                     {Dish}
                </div>
                <div className="col-12 col-md m-1">
                    {Promo}
                </div>
                <div className="col-12 col-md m-1">
                   {Leader}
                </div>
            </div>
        </div>
    );
}

export default Home;