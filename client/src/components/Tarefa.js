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

    handleDestravar(id) {
        this.props.remTarefaPontos(id);
    }

    classeCor(ordem) {
        if (ordem % 2) {
            return "corSim";
        }
        return "corNao";
    }

    render() {
        const { nome, estoria, ordem, dataId, pontos, votos, travar } = this.props;
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
                        {travar ? this.renderDestravar(dataId) : this.renderDefinirPontos(dataId) }
                        {!travar ? this.renderVotar(dataId): null}
                        
                        <div className="tarefa-opcoes-excluir">
                            <button id='excluir' className="btn btn-danger" onClick={this.handleOnEnd.bind(this, dataId) }>
                                <i className="fa fa-close"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderVotar(dataId) {
        return (
            <div className="tarefa-opcoes-votar pull-right">
                <div className="btn-group" title="Votar">
                    <button type="button" class="btn btn-secondary dropdown-toggle" id="votacao" data-toggle="dropdown">
                        <i className="fa fa-bullhorn fa-2x"></i>
                    </button>

                    <Cartas
                        key={dataId}
                        dataId={dataId}
                        onVoto={this.handleVoto.bind(this) }
                        />
                </div>
            </div>
        );
    }

    renderDestravar(dataId) {
        return (
            <div className="tarefa-opcoes-destravar" title="Remover">
                <button id='excluir' className="btn btn-danger" onClick={this.handleDestravar.bind(this, dataId) }>
                    <i className="fa fa-unlock"></i>
                </button>
            </div>
        );
    }

    renderDefinirPontos(dataId) {
        return (
            <div className="tarefa-opcoes-pontos" title="Definir Pontuação">
                <div className="dropdown pull-right">
                    <button type="button" class="btn btn-default dropdown-toggle" id="votacao" data-toggle="dropdown">
                        <i className="fa fa-flag-checkered fa-2x"></i>
                    </button>

                    <Cartas
                        key={dataId}
                        dataId={dataId}
                        onVoto={this.handlePontos.bind(this) }
                        />
                </div>
            </div>
        );
    }

    renderVotos(votos) {
        return (
            <div>
                {votos.map((item, index) => {
                    return (
                        <span key={index}>{item.voto}&nbsp; |&nbsp; </span>
                    )
                }) }
            </div>

        );
    }
}

export default Tarefa;

