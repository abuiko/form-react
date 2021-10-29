import React, { Component } from "react"
import styled from "styled-components"
import Navigation from "./Navigation"

const Styles = styled.div`
    .center {
        text-align: center;
        margin-top: 50px;
    }
`;
export class Success extends Component {

    back = e => {
        e.preventDefault()
        this.props.prevStep()

    }

    continue = e => {
        e.preventDefault()
        this.props.nextStep()

    }

    render() {

        return (
            <Styles>

                <Navigation />
                <div className="center">
                    <h1>Thank You For Your Application</h1>
                    <p>You will get email with further instructions</p>
                </div>

            </Styles>
        )
    }
}