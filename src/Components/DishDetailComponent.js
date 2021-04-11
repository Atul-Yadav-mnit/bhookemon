import React, { Component } from 'react'
import { Card, CardBody,    Label, CardImg, CardText, CardTitle, CardSubtitle, BreadcrumbItem, Breadcrumb, Button, Modal, ModalHeader, ModalBody,Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LocalForm, Control, Errors } from 'react-redux-form'



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

class RenderComment extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
                isOpen : !this.state.isOpen
            })
    }

    handleSubmit = values => {
        alert(JSON.stringify(values))
        this.toggle();
    }

    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);

        const com = this.props.comments.map((comment) => {
            return (
                <div>
                    <h5>{comment.author} </h5>
                    <h7>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</h7>
                    <p>{comment.comment}</p>
                </div>
            )
    
        })

        

        return (

            <div>
                <h1>Comments</h1>
                <hr></hr>
                {com}
                <hr></hr>
                <Button color="danger" onClick={this.toggle}>Comment</Button>
                <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col md = {2}>
                                <Label htmlFor="name">Name</Label>
                            </Col>
                            <Col md={8}>
                                <Control.text model=".name"
                                    validators={{
                                        required, minLength: minLength(3), maxLength:maxLength(15)
                                    }}
                                   className="form-control"
                                   />    
                                   <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters ',
                                            maxLength: 'Must be 15 characters or less '
                                        }}
                                    />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md = {2}>
                                <Label htmlFor="rating">Rating</Label>
                            </Col>
                            <Col md={3}>
                                <Control.select model=".rating"
                                   className="form-control"
                                   rows="5">
                                       <option>1</option>
                                       <option>2</option>
                                       <option>3</option>
                                       <option>4</option>
                                       <option>5</option>
                                   </Control.select>

                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md = {2}>
                                <Label htmlFor="Comment">Comment</Label>
                            </Col>
                            <Col md={8}>
                                <Control.textarea model=".comment"
                                   className="form-control"
                                   rows="3"
                                   validators={{
                                    required, minLength: minLength(10), maxLength:maxLength(50)
                                }}
                                   />  
                                   <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 10 characters ',
                                            maxLength: 'Must be 50 characters or less '
                                        }}
                                    />  
                            </Col>
                        </Row>
                        <hr></hr>
                        <Button type="submit" className="mr-auto" color="danger">Add Comment</Button>
                        </LocalForm>
                   
                      </ModalBody>
                        
                </Modal>
            </div>

        )
    }
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
