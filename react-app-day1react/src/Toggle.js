import React, {Component} from 'react';

class Toggle extends Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        //this binding is necessary to make 'this' work in the callback
        //this.handleClick = this.handleClick.bind(this);
    }

    //The handleClick for arrow functions
    handleClick = () => {
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    //the handleClick for bind
    // handleClick(){
    //     this.setState(prevState =>({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    render(){
        return(
            <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;