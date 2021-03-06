import React, { Component } from 'react'

export default class TogglePegLeg extends Component {
    state = {
        on: false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (
            <div>
                {this.state.on && (
                    <span>{
                        <img className="toggle-item"
                    src={"https://image.flaticon.com/icons/svg/123/123970.svg"}
                    alt="peg-leg"
                />
                    }</span>
                )}
                <button onClick={this.toggle}>Toggle Me!</button>
            </div>
        )
    }
}
