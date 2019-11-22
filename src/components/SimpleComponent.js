import React, { Component } from 'react'

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }

  onClick = () => {
    this.setState(
      this.state.mood === "happy"
        ? {mood: "sad"}
        : {mood: "happy"}
    )
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {this.state.mood}
      </div>
    )
  }
}
