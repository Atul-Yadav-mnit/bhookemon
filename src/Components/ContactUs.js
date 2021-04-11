import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, FormGroup, Input, FormFeedback, Row, Col, Label, Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                agree: false,
                contactType: false,
                message: false,
            }
        }
    }

    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        this.setState({
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false,
                agree: false,
                contactType: false,
                message: false,
            }
        })
        event.preventDefault();
    }

    handleBlur = (event) => {
        const target = event.target;
        console.log("Blurred" + target.name);
        this.setState({
            touched : {...this.state.touched, [target.name]:true}
        })
    }

    handleError = () => {
        var errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            message: ''
        }
        if (this.state.touched.firstname && this.state.firstname.length < 3)
            errors.firstname = 'First Name should be >= 3 characters';
        else if (this.state.touched.firstname && this.state.firstname.length > 10)
            errors.firstname = 'First Name should be <= 10 characters';

        if (this.state.touched.lastname && this.state.lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && this.state.lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(this.state.telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && this.state.email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    render() {
        const errors = this.handleError();
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
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Row>
                                <Col md={2}>
                                    <Label htmlFor="firstname">FirstName</Label>
                                </Col>
                                <Col md={7}>
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur}
                                        valid={errors.firstname === ''&& this.state.touched.firstname === true}
                                        invalid={errors.firstname !== ''} />
                                        <FormFeedback>{errors.firstname}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={2}>
                                    <Label htmlFor="lastname">Last Name</Label>
                                </Col>
                                <Col md={7}>
                                    <Input type="text" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur}
                                        valid={errors.lastname === ''&& this.state.touched.lastname === true}
                                        invalid={errors.lastname !== ''} />
                                        <FormFeedback>{errors.lastname}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={2}>
                                    <Label htmlFor="telnum">Tel. Num</Label>
                                </Col>
                                <Col md={7}>
                                    <Input type="telnum" id="telnum" name="telnum"
                                        placeholder="Telephone Number"
                                        value={this.state.telnum}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur} 
                                        valid={errors.telnum === ''&& this.state.touched.telnum === true}
                                        invalid={errors.telnum !== ''}/>
                                        <FormFeedback>{errors.telnum}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={2}>
                                    <Label htmlFor="email">Email</Label>
                                </Col>
                                <Col md={7}>
                                    <Input type="email" id="email" name="email"
                                        placeholder="Email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur}
                                        valid={errors.email === '' && this.state.touched.email === true}
                                        invalid={errors.email !== ''} />
                                        <FormFeedback>{errors.email}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={{ size: 3, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox"
                                                name="agree"
                                                value={this.state.agree}
                                                onChange={this.handleInputChange}
                                                onBlur={this.handleBlur} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 2, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Col md={2}>
                                    <Label htmlFor="feedback">Feedback</Label>
                                </Col>
                                <Col md={7}>
                                    <Input type="textarea" id="feedback" name="feedback"
                                        rows="5"
                                        placeholder="Feedback"
                                        value={this.state.FormFeedback}
                                        onChange={this.handleInputChange}
                                        onBlur={this.handleBlur} 
                                        valid={errors.message === '' && this.state.touched.message === true}
                                        invalid={errors.message !== ''}/>
                                        <FormFeedback>{errors.message}</FormFeedback>
                                </Col>
                            </Row>
                        </FormGroup>
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