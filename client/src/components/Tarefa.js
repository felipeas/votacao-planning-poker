import React, { Component } from 'react';
import Cartas from '../components/Cartas';

class Tarefa extends Component {
    handleOnEnd(id) {
        this.props.remTarefa(id);
    }
    
    handleVoto(id, valor) {         
        const voto = {
            'tarefa': id, 
            'voto': valor,
        };
        
        this.props.addVoto(id, voto);      
    }
    
    classeCor(ordem) {
        if (ordem % 2) {
            return "corSim";
        } 
        return "corNao";
    }
    
    render() {
        const { nome, estoria, ordem, dataId, votos } = this.props;
        const numero = (estoria + 1) + '.' + (ordem + 1);
        const classeCor = this.classeCor(ordem);
        const pontos = '1';
       
        return (            
            <div className={classeCor + ' tarefa'}>
                <div className="tarefa-dados row">
                    <div className="tarefa-numero">
                        <p>{numero}</p>
                        <p>{pontos}</p>
                    </div>
                    <div className="tarefa-titulo">
                        <p>{nome}</p>
                        {votos ? renderVotos() : null}
                    </div>
                 
                    <div className="tarefa-opcoes">
                        <div className="tarefa-opcoes-votar"> 
                            <div className="dropdown pull-right">          
                            <button type="button" class="btn btn-default dropdown-toggle" id="votacao" data-toggle="dropdown">
                                    <i className="fa fa-bullhorn fa-2x"></i>
                                </button>
                                    
                                <Cartas 
                                    key={dataId}
                                    dataId={dataId}
                                    onVoto={this.handleVoto.bind(this)}
                                />
                            </div>
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
    
    renderVotos() {
        const { votos } = this.props;
        return (
            <div>
                {votos.map((item, index) => {
                    return (
                        <span>{item}&nbsp;</span>   
                    )
                })}
            </div>
            
        );
    }
}

export default Tarefa;

