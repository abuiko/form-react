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
    .button-group {
        display: flex;
    }
    .button-group button:first-child {
        margin-right: 5px;
    }
`;

export class FormPersonalDetails extends Component {

    back = e => {
        e.preventDefault()
        this.props.prevStep()

    }

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
                                label="Occupation"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Occupation"
                                    onChange={handleChange("occupation")}
                                    value={values.occupation}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <FloatingLabel
                                controlId="floatingINput"
                                label="City"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    onChange={handleChange("city")}
                                    value={values.city}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <FloatingLabel
                                controlId="floatingINput"
                                label="Bio"
                                className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Bio"
                                    onChange={handleChange("bio")}
                                    value={values.bio}
                                ></Form.Control>
                            </FloatingLabel>
                            <br />
                            <div className="button-group">
                                <Button variant="outline-dark" onClick={this.back} size="md">Back</Button>
                                <Button variant="dark" onClick={this.continue} size="md">Continue</Button>
                            </div>

                        </Form.Group>

                    </Form>
                </div>
            </Styles>
        )
    }
}