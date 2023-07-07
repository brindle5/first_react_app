import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
            count: this.state.count + 1,
        }, () => {
            // Callback function:

        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);        
        });
        console.log(this.state.count);
    }


    render() {
        return (
        <div>        
            <h1>{this.state.introduction}</h1>
            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            <button onClick={() => this.handleClick()}>{this.state.count}</button>

            <h2>You've clicked {this.state.count} times. </h2>
        </div>
        )
    }

}

export default StatefulGreetingWithPrevState