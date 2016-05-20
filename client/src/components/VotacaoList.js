import React, { Component } from 'react';
import Estoria from '../components/Estoria';

export class VotacaoList extends Component {
    
    render() {              
        const { estorias } = this.props.sprint.sprint;
        
        return (
            <div>
                {(estorias.length > 0) ? this.renderEstorias() : this.renderVazio()}
            </div>
        );
    }
    
    remEstoria(id){
        const { sprintId } = this.props.routeParams;
        this.props.remEstoria(sprintId,id);
    }
    
    remTarefa(id){
        const { sprintId } = this.props.routeParams;
        this.props.remTarefa(sprintId,id);
    }
    
    renderEstorias() {
        const { estorias } = this.props.sprint.sprint;
        
        return (
            <div>      
                {estorias.map((item, index) => {
                    return (
                        <Estoria 
                            key={index}
                            ordem={index}
                            nome={item.nome}
                            pontos={item.pontos}
                            dataId={item._id}
                            tarefas={item.tarefas}
                            addTarefa={this.props.addTarefa}
                            addVoto={this.props.addVoto}
                            addTarefaPontos={this.props.addTarefaPontos}
                            remEstoria={this.remEstoria.bind(this)}
                            remTarefa={this.remTarefa.bind(this)}
                        />    
                    );
                })}
            </div>
        );
    }
    renderVazio() {
        return (
            <div>
                <span>VAZIO</span>
            </div>
        );
    }
}

export default VotacaoList;