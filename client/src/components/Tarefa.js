import React, { Component } from 'react';
import Cartas from '../components/Cartas';

class Tarefa extends Component {
    static propTypes = {
        votos: React.PropTypes.array,
    }
    
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
    
    handlePontos(id, valor) {         
        const voto = {
            'pontos': valor,
        };
        
        this.props.addTarefaPontos(id, voto);      
    }
    
    classeCor(ordem) {
        if (ordem % 2) {
            return "corSim";
        } 
        return "corNao";
    }
    
    render() {
        const { nome, estoria, ordem, dataId, pontos, votos } = this.props;
        const numero = (estoria + 1) + '.' + (ordem + 1);
        const classeCor = this.classeCor(ordem);
       
        return (            
            <div className={classeCor + ' tarefa'}>
                <div className="tarefa-dados row">
                    <div className="tarefa-numero">
                        <p>{numero}</p>
                        <p>{pontos}</p>
                    </div>
                    <div className="tarefa-titulo">
                        <p>{nome}</p>
                        {votos.length > 0 ? this.renderVotos(votos) : null}
                    </div>
                 
                    <div className="tarefa-opcoes">
                        <div className="tarefa-opcoes-pontos"> 
                            <div className="dropdown pull-right">          
                            <button type="button" class="btn btn-default dropdown-toggle" id="votacao" data-toggle="dropdown">
                                    <i className="fa fa-flag-checkered fa-2x"></i>
                                </button>
                                    
                                <Cartas 
                                    key={dataId}
                                    dataId={dataId}
                                    onVoto={this.handlePontos.bind(this)}
                                />
                            </div>
                        </div>
                    
                        <div className="tarefa-opcoes-votar"> 
                            <div className="dropdown pull-right">          
                                <button type="button" class="btn-default dropdown-toggle" id="votacao" data-toggle="dropdown">
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
                            <button id='excluir' className="btn btn-danger" onClick={this.handleOnEnd.bind(this,dataId)}>                            
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
    renderVotos(votos) {
        return (
            <div>
                {votos.map((item, index) => {
                    return (
                        <span>{item.voto}&nbsp;|&nbsp;</span>   
                    )
                })}
            </div>
            
        );
    }
}

export default Tarefa;

