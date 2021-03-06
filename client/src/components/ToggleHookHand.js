import React, { Component } from 'react'

export default class ToggleHookHand extends Component {
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
                    src={"https://media.istockphoto.com/vectors/pirate-hook-hand-icon-vector-isolated-vector-id1096534672?k=6&m=1096534672&s=612x612&w=0&h=slA0eBiOwdaQJOBb4A61Bb5-QuP5Y1wqP7mGsuCHKxw="}
                    alt="hook-hand"
                />
                    }</span>
                )}
                <button onClick={this.toggle}>Toggle Me!</button>
            </div>
        )
    }
}
