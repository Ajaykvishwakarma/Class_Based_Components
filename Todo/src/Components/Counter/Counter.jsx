import React from "react";

export class Counter extends React.Component {
    constructor () {
        super() 
        this.state = {count: 0}
    }

    handleClick = () => {
        this.setState({count : this.state.count + 1})
    }
    handleClick1 = () => {
        this.setState({count : this.state.count - 1})
    }
    render() {
        return (
            <div style={{border: "1px solid red", marginTop:"10px"}}>
                <h2>Counter With Seperate Function</h2>
                <h2>Counter : {this.state.count}</h2>
                {/* <button type="button" onClick={() => { this.setState({ count : this.state.count + 1 })}} >+</button>
                <button type="button" onClick={() => { this.setState({ count : this.state.count - 1 })}} >-</button> */}

                <button type="button" onClick={this.handleClick} >+</button>
                <button type="button" onClick={this.handleClick1 } >-</button>
            </div>
        )
    }
}