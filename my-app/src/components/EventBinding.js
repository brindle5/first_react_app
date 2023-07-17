import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        }, () => {

            // Callback function:

        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    }

    // Prefered binding method

    // handleClick = () => {
    //     this.setState({
    //         introduction: "Goodbye!",
    //         buttonText: "Enter",
    //     });
    //     console.log(this);        
    // }


    render() {
        return (
        <div>        
            <h1>{this.state.introduction} {this.props.name}, {this.props.greeting}</h1>
            <button onClick={() => this.handleClick()}>
            {/* <button onClick={this.handleClick.bind(this)}> */}
            {this.state.buttonText}
            </button>
        </div>
        )
    }

}

export default EventBinding