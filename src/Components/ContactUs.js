import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,  Row, Col, Label, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Control , Form , Errors } from 'react-redux-form'

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }


    handleSubmit = (values) => {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedback();
    }

    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        const isNumber = (val) => !isNaN(Number(val));
        const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
        
        return (
            <div className="container">
                <div className="row mt-3">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="skype.com"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <br></br>
                    <div className="row">
                        <div className="col-12">
                            <h3>Send Us Your FeedBack! </h3>
                        </div>
                    </div>
                    <br></br>
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        
                            <Row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="firstname">FirstName</Label>
                                </Col>
                                <Col md={7}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength : minLength(3) , maxLength:maxLength(15)
                                        }}
                                         />
                                         <Errors
                                        className="text-danger"
                                        model=".firstname"
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
                                <Col md={2}>
                                    <Label htmlFor="lastname">Last Name</Label>
                                </Col>
                                <Col md={7}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength : minLength(3) , maxLength:maxLength(15)
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".lastname"
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
                                <Col md={2}>
                                    <Label htmlFor="telnum">Tel. Num</Label>
                                </Col>
                                <Col md={7}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Telephone Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength : minLength(10) , maxLength:maxLength(10), isNumber
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be exactly 10 digits ',
                                            maxLength: 'Must be exactly 10 digits ',
                                            isNumber:"Only numbers are allowed "
                                        }}
                                        />
                                </Col>
                            </Row>
                       
                            <Row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="email">Email</Label>
                                </Col>
                                <Col md={7}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            validEmail: "Invalid Email "
                                            
                                        }}
                                        />
                                </Col>
                            </Row>
                       
                            <Row className="form-group">
                                <Col md={{ size: 3, offset: 3 }} >
                                        
                                            <Control.checkbox model=".agree" type="checkbox"
                                                name="agree"
                                               /> {' '}
                                            <strong>May we contact you?</strong>
                                    
                                </Col>
                                <Col md={{ size: 2, offset: 1 }}>
                                    <Control.select  model =".contactType" type="select" name="contactType" className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                       
                            <Row className="form-group">
                                <Col md={2}>
                                    <Label htmlFor="feedback">Feedback</Label>
                                </Col>
                                <Col md={7}>
                                    <Control.textarea model=".message" id="feedback" name="feedback"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Feedback"
                                        validators={{
                                            required, minLength : minLength(10) , maxLength:maxLength(100)
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".message"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be minimum 10 characters ',
                                            maxLength: 'Must be maximum 100 characters ',
                                           
                                        }}
                                        />
                                        
                                </Col>
                            </Row>
                       
                        <Row>
                            <Col md={{ size: 3, offset: 2 }}>
                                <Button>Submit</Button>
                            </Col>
                        </Row>


                    </Form>

                </div>

            </div>
        );
    }
}

export default Contact;