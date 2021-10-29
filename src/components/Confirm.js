import React, { Component } from "react"
import { Button, ListGroup } from 'react-bootstrap'
import styled from "styled-components"
import Navigation from "./Navigation"

const Styles = styled.div`
    .center {
        text-align: center
        
    }
    .list {
        display: flex;
        justify-content: center;
       
        min-height: 60vh;
    }
    .button-group {
        display: flex;
        justify-content: center;
        
    }
    .button-group button:first-child {
        margin-right: 5px;
    }
`;

export class Confirm extends Component {

    back = e => {
        e.preventDefault()
        this.props.prevStep()

    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()

    }

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props

        return (
            <Styles>
                <Navigation />
                <div>
                    <ListGroup as="ul" className="list">
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">First Name</div>
                                {firstName}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Last Name</div>
                                {lastName}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Email</div>
                                {email}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Occupation</div>
                                {occupation}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">City</div>
                                {city}
                            </div>
                        </ListGroup.Item>
                        <ListGroup.Item className="center">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Bio</div>
                                {bio}
                            </div>
                        </ListGroup.Item>
                    </ListGroup>


                    <div className="button-group">
                        <Button variant="outline-dark" onClick={this.back} size="md">Back</Button>
                        <Button variant="dark" onClick={this.continue} size="md">Confirm & Continue</Button>
                    </div>




                </div>
            </Styles>
        )
    }
}