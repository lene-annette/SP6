import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App2 from './App2';
import Clock from './Clock';
import Toggle from './Toggle';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<App2 />, document.getElementById('root'));
// ReactDOM.render(
// <Clock interval="2000" text="Check out this cool react-driven timer"/>, 
// document.getElementById('root')
// );
ReactDOM.render(<Toggle />, document.getElementById('root'));
registerServiceWorker();
