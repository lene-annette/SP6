import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import ListDemo from './ListDemo';
//import Car from './Car';
//import NameForm from './NameForm';
//import EssayForm from './EssayForm';
//import FlavorForm from './FlavorForm';
//import Reservation from './Reservation';
import JokeApp from './JokeApp';
import jokesStore from './jokesStore';

ReactDOM.render(<JokeApp jokesStore={jokesStore}/>, document.getElementById('root'));
