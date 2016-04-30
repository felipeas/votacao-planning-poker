import React, { Component } from 'react';
import Estoria from '../components/Estoria';

export class VotacaoList extends Component {
    static propTypes = {
        sprint: React.PropTypes.Object,
    }
       
    render() {
        const { estorias } = this.props.sprint;
                
        return (
            <div>
                {estorias.map((item, index) => {
                    return (
                        <Estoria 
                            key={index}
                            nome={item.nome}
                            tarefas={item.tarefas}
                        />    
                    );
                })}
            </div>
        );
    }
}

export default VotacaoList;