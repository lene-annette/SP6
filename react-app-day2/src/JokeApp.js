import React, {Component} from 'react';
import AllJokes from './AllJokes';
import AddJoke from './AddJoke';

class JokeApp extends Component{
    constructor(props){
        super(props);
        this.state = { jokes: props.jokesStore.jokes };
    }
    saveJoke = (joke) => {
        this.props.jokeStore.addJoke(joke);
        this.setState({jokes: this.props.jokeStore.jokes});
    }

    render(){
        return(
            <div>
                <p>Random Joke: <span>{this.props.jokesStore.getRandomJoke()}</span></p>
                <div>
                    <p>Add Joke</p>
                    <AddJoke saveJoke={this.saveJoke} /> 
                </div>
                <div>
                    <p>All Jokes:</p>
                    <AllJokes jokes={this.state.jokes} />
                </div>
            </div>
        );
    }
}

export default JokeApp;