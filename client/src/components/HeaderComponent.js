import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal, ModalHeader, Button, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" widht="41" alt="Ristorante Con Fusion" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar  > 
                        {/* className="navbar-collapse" */}
                            <Nav navbar>
                                <NavItem>
                                    {/* <NavLink className="nav-link" to="/"> */}
                                        Nishant Nimbalkar (2020SP93045)
                                    {/* </NavLink> */}
                                </NavItem>
                            </Nav>
                        </Collapse>    
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;