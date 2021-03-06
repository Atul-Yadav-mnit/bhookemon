import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalBody, ModalHeader,Form,FormGroup,Label,Input} from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        }
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }


    toggle = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin = (event) =>{
        this.toggle();
        event.preventDefault();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        // alert("ngsimf");
        
    }

    render() {

        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Bhookemon' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    
                    
                        <Button className="ml-1" color="danger" onClick={this.toggle}><span className="fa fa-sign-in fa-lg"></span>Login</Button>
                        <Modal isOpen={this.state.isModalOpen} toggle={this.toggle} >
                            <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={this.handleLogin}>
                                    <FormGroup>
                                        <Label htmlFor="username">UserName</Label>
                                        <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} 
                                        
                                        ></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}></Input>
                                    </FormGroup>
                                    <FormGroup className="ml-4">
                                        <Input  type="checkbox" id="remember" name="checkbox"innerRef={(input) => this.remember = input}></Input>
                                        <Label htmlFor="checkbox">Remember Me</Label>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary" className="mr-auto" >Login</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </Navbar>
                
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Bhookemon</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>


            </React.Fragment>
        );
    }
}

export default Header;