import React from "react";

class Cars extends React.Component {
    render() {
        return (
            <h2>
                I am Car!
            </h2>
        )
    }
}

export class Garage extends React.Component {
    render () {
        return (
            <div style={{border:"1px solid green"}}>
                <Cars />
              <h2>  Who lives in my Garage? </h2>
            </div>
        )
    }
}