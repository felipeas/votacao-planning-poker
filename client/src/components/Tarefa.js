import React, { Component } from 'react';

class Tarefa extends Component {
    render() {
        const { nome, estoria, ordem, dataId } = this.props;
        const numero = (estoria + 1) + '.' + (ordem + 1); 
        return (
            <div className="tarefa row">
                <span>{numero}</span>
                <div className="tarefa-dados">
                    <span>{nome}</span>
                </div>
            </div>
        );
    }
}

export default Tarefa;

