import React, { Component } from 'react'

export default class ToggleEyePatch extends Component {
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
                    src={"https://image.flaticon.com/icons/png/512/877/877460.png"}
                    alt="pirate patch"
                />
                    }</span>
                )}
                <button onClick={this.toggle}>Toggle Me!</button>
            </div>
        )
    }
}
