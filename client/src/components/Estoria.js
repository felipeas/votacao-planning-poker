import React, { Component } from 'react';

class Estoria extends Component {
    render() {
        debugger;
        return (
            <div className="row">
                <span>{this.props.key}</span>
                <span>{this.props.nome}</span>
                <span>{this.props.tarefas}</span>
            </div>
        );
    }
}

export default Estoria;

