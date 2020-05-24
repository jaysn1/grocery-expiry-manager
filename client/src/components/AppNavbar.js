import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';



class AppNavbar extends Component {
   state ={
        isOPen: false 
    }

    toggle = () =>{
        this.setState({
            isOPen: !this.state.isOPen
        });
    }

    render() {

        return(
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/"><h1>Dada</h1></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOPen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/sid-7">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/sid-7">
                                    Login
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/sid-7">
                                    Signup
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
        
    }




}



export default AppNavbar;