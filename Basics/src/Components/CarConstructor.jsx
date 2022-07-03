//declare a state in class components
import React from 'react';
 
export class CarConstructor extends React.Component {

    constructor() {
        super();
        this.state = {color: 'red'};
    }
    render() {
        return <>
            <h2>Hii This car is {this.state.color} !</h2>
        </>
    }

}
