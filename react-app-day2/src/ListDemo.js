import React, { Component } from 'react';

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        //<li key={number.toString()}>{number}</li>    
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItems}</ul>
    );

}

function NumberTable(props) {
    const numbers = props.numbers;
    const tableItems = numbers.map((number) =>
        <TableItem key={number.toString()} value={number} />
    );
    return (
        <table>
            <thead>
                <tr><th>Number</th></tr>
            </thead>
            <tbody>
                {tableItems}
            </tbody>
        </table>
    );
}

function TableItem(props) {
    return (
        <tr><td>{props.value}</td></tr>
    );
}

function ListItem(props) {
    return <li>{props.value}</li>
}

class ListDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { numbers: this.props.data };
    }
    render() {

        return (
            <div>
                {/* <NumberList numbers={[1, 2, 3, 4, 5]} /> */}
                <NumberTable numbers={[1, 2, 3, 4, 5]} />
            </div>
        );
    }
}

export default ListDemo;