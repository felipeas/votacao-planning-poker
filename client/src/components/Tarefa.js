import React, { Component } from 'react';

class Tarefa extends Component {
    render() {
        
        return (
            <div className="tarefa row">
                <span>{this.props.nome}</span>
            </div>
        );
    }
}

export default Tarefa;

