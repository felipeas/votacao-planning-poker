import React, { Component } from 'react';
import Cartas from '../components/Cartas';

class Tarefa extends Component {
    handleOnEnd(id) {
        this.props.remTarefa(id);
    }
    
    handleVoto(voto) {        
        debugger;
    }
    
    classeCor(ordem) {
        if (ordem % 2) {
            return "corSim";
        } 
        return "corNao";
    }
    
    render() {
        const { nome, estoria, ordem, dataId } = this.props;
        const numero = (estoria + 1) + '.' + (ordem + 1);
        const classeCor = this.classeCor(ordem);
        const pontos = '1';
        const votos = [4, 3, 2, 1];
        return (            
            <div className={classeCor + ' tarefa'}>
                <div className="tarefa-dados row">
                    <div className="tarefa-numero">
                        <p>{numero}</p>
                        <p>{pontos}</p>
                    </div>
                    <div className="tarefa-titulo">
                        <p>{nome}</p>
                        {votos.map((item, index) => {
                            return (
                                <span>{item}&nbsp;</span>   
                            )
                        })}
                    </div>
                 
                    <div className="tarefa-opcoes">
                        <div className="tarefa-opcoes-votar">
                            <button id='votar' className="btn">                            
                                <div className="dropdown pull-right">
                                    <a type="button" id="votacao" data-toggle="dropdown">
                                        <i className="fa fa-bullhorn fa-2x"></i>
                                    </a>
                                    
                                    <Cartas 
                                        key={dataId}
                                        onVoto={this.handleVoto.bind(this)}
                                    />
                                </div>
                            </button>
                        </div>
                        <div className="tarefa-opcoes-excluir">
                            <button id='excluir' className="btn pull-right" onClick={this.handleOnEnd.bind(this,dataId)}>                            
                                <i className="fa fa-close "></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tarefa;

