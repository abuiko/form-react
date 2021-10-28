import React, { Component } from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import styled from "styled-components";

const Styles = styled.div`
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 80vh;
    }
    
    .form-group {
        width: 70%;
    }
    
    .form-group button {
        width: 100%;
        padding: 0.7rem;
    }
`;

export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStop()
    }

    render() {
        const { values, handleChange } = this.props

        return (
            <Styles>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                    <Form>
                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingINput"
                                label="First Name"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="First Name"
                                    onChange={handleChange("firstName")}
                                    value={values.firstName}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <FloatingLabel
                                controlId="floatingINput"
                                label="Last Name"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Last Name"
                                    onChange={handleChange("lastName")}
                                    value={values.lastName}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <FloatingLabel
                                controlId="floatingINput"
                                label="Email"
                                className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="email@gmail.com"
                                    onChange={handleChange("email")}
                                    value={values.email}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <Button variant="dark" onClick={this.continue} size="md">Continue</Button>
                        </Form.Group>

                    </Form>
                </div>
            </Styles>



        )
    }
}