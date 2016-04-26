import React, { Component } from 'react';
import Tarefa from '../components/Tarefa';
import { AddTarefa } from '../components/AddTarefa';

class Estoria extends Component {
    static propTypes = {
        tarefas: React.PropTypes.array,
    }
    
    render() {
        const { tarefas } = this.props;
        
        return (
            <div className="estoria row">
                
                <a>{this.props.nome}</a>
                
                {tarefas.map((item, index) => {
                    return (
                        <Tarefa 
                            key={index}
                            nome={item.nome}
                        />    
                    );
                })}
                <AddTarefa {...this.props}/>
            </div>
        );
    }
}

export default Estoria;

