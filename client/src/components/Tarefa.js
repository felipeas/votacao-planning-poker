import React, { Component } from 'react';

class Tarefa extends Component {
    handleOnEnd(id) {
        this.props.endSprint(id);
    }
    
    render() {
        const { nome, estoria, ordem, dataId } = this.props;
        const numero = (estoria + 1) + '.' + (ordem + 1); 
        return (
            
            <div className="tarefa">
                <div className="tarefa-dados row">
                    <div className="tarefa-numero">
                        <span>{numero}</span>
                    </div>
                    <div className="tarefa-titulo">
                        <span>{nome}</span>
                    </div>
                    <div className="tarefa-opcoes">
                        <button id='excluir' className="btn blue" onClick={this.handleOnEnd.bind(this,numero)}>                            
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Tarefa;

