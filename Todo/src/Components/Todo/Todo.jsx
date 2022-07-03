import React from 'react';

export class Todo extends React.Component {

    constructor () {
        super()
        this.state = ({todo : [], todos:""})
        let arr = [];
    }
    handleTodo =() => {
        console.log("Hii")
        this.setState( [{todooo : this.state.todos}])
    }


    render () {
        return (
            <div style={{marginTop:"10px", border:"1px solid red", padding:"20px"}}>
                    <input type="text" name="todos" onChange={(e) => {this.setState({todos: e.target.value})}} />
                    <button type='button' onClick={this.handleTodo} >Add Todo</button>
                    <h5>{this.state.todo?.map((el) => (
                       <h3> {el}</h3>
                    ))}</h5>
            </div>
        )
    }
}