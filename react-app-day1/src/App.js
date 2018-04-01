import React, { Component } from 'react';

import './App.css';
import upper, {text1,text2,text3} from "./datastore1";
import person from "./datastore2";

class App extends Component {
  render() {
    const {firstName, email} = person;
    return (
      <div className="App">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("please uppercase me")}</p>
        <p>{firstName}, {email}</p>
      </div>
    );
  }
}

export default App;
