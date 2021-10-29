import React, { Component } from "react"
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import styled from "styled-components"
import Navigation from "./Navigation"

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
        this.props.nextStep()

    }

    render() {
        const { values, handleChange } = this.props

        return (
            <Styles>
                <Navigation />
                <div>
                    <Form>
                        <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                            <FloatingLabel
                                controlId="floatingInput"
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