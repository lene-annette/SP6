import React, {Component} from 'react';

class AllJokes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const lis = this.props.jokes.map((j, i) =>(<li key={i}>{j}</li>));
        return(
            <ul>
                {lis}
            </ul>
        );
    }
}

export default AllJokes;