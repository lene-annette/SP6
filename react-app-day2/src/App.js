import React, { Component } from 'react';

const numbers = [1,2,3,4,5];
const listItems = numbers.map((number) => 
  <li>{number}</li>
);

class App extends Component {
  render() {
    return <ul>{listItems}</ul>;
  }
}

export default App;
