
import React, { Component } from 'react'

export default class ToggleCannon extends Component {
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
                    src={"https://static.vecteezy.com/system/resources/previews/000/552/195/original/war-cannon-firing-cannonball-vector-icon.jpg"}
                    alt="cannon"
                />
                    }</span>
                )}
                <button onClick={this.toggle}>Toggle Me!</button>
            </div>
        )
    }
}
