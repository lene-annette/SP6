import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log("constructor");
    }

    componentDidMount(){
        console.log("component did mount");
        this.timerID = setInterval(
            ()=> this.tick(), this.props.interval
        );
    }
    componentWillUnMount(){
        console.log("component will unmount");
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.text}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;