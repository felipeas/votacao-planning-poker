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
                            dataId={item._id}
                            tarefas={item.tarefas}
                            addTarefa={this.props.addTarefa}
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