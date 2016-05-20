import React, { Component } from 'react';
import Tarefa from '../components/Tarefa';
import { AddTarefa } from '../components/AddTarefa';

class Estoria extends Component {
    static propTypes = {
        tarefas: React.PropTypes.array,
    }

    handleOnEnd(id) {
        this.props.remEstoria(id);
    }

    render() {
        const { nome, ordem, pontos, tarefas, dataId } = this.props;
        const numero = ordem + 1;

        return (
            <div className="estoria">
                <div className="estoria-dados row">
                    <div className="estoria-numero">
                        <p>{numero}</p>
                        <p>{pontos}</p>
                    </div>
                    <div className="estoria-titulo">
                        <span>{nome}</span>
                    </div>
                    <div className="estoria-opcoes">
                        <button id='excluir' className="btn blue" onClick={this.handleOnEnd.bind(this, dataId) }>
                            <i className="fa fa-close"></i>
                        </button>
                    </div>
                </div>

                <div className="estoria-tarefas">
                    {tarefas.map((item, index) => {
                        return (
                            <Tarefa
                                key={index}
                                estoria={ordem}
                                ordem={index}
                                dataId={item._id}
                                nome={item.nome}
                                remTarefa={this.props.remTarefa}
                                addVoto={this.props.addVoto}
                                addTarefaPontos={this.props.addTarefaPontos}
                                />
                        );
                    }) }
                    <AddTarefa formKey={dataId} {...this.props}/>
                </div>
            </div>
        );
    }
}

export default Estoria;

