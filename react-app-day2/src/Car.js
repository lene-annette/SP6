import React, {Component} from 'react';
import AllCars from './AllCars';

function CarTable(props){
    const cars = props.cars;
    const rows = cars.map((car) =>
        <TableItem key={car.id} value={car} />
    );
    return(
        <table>
            <thead>
                <tr><th>Make</th><th>Model</th><th>Year</th></tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

function TableItem(props){
    return(
        <tr><td>{props.value.make}</td>
        <td>{props.value.model}</td>
        <td>{props.value.year}</td></tr>
    );
}

class Car extends Component{
    render(){
        return(
            <CarTable cars={AllCars()}/>
        );
    }
}

export default Car;