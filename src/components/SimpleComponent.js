import React from 'react';

class SimplerComponent extends React.Component{
    state={
        mood: "happy"
    }

    handleClick = () => {
        const mood = this.state.mood === "happy" ? "sad" : "happy"
        this.setState({
            mood: mood
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}

export default SimplerComponent;