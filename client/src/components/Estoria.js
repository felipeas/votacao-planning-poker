import React, { Component } from 'react';
import Tarefa from '../components/Tarefa';
import { AddTarefa } from '../components/AddTarefa';

class Estoria extends Component {
    static propTypes = {
        tarefas: React.PropTypes.array,
    }
    
    handleOnEnd(id) {
        this.props.endSprint(id);
    }
    
    render() {
        const { nome, ordem, tarefas, dataId } = this.props;
        const numero = ordem + 1;
        
        return (
            <div className="estoria row">
                <div className="estoria-numero">
                    <span>{numero}</span>
                    <span>{nome}</span>
                </div>
                <div className="estoria-dados">
                    <button className="btn btn-blue pull-right" onClick={this.handleOnEnd.bind(this,numero)}>
                        <span>Remover&nbsp;</span>
                        <i className="fa fa-close"></i>
                    </button>
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
                            />    
                        );
                    })}
                    <AddTarefa formKey={dataId} {...this.props}/>
                </div>
                
            </div>
        );
    }
}

export default Estoria;

