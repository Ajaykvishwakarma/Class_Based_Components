import React from "react";

export class PropsConstructor extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>
                    Hey Chuck! Give me your {this.props.device} !
                </h2>
            </div>
        )
    }
}