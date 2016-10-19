import React, { Component, PropTypes } from 'react';


class Cartas extends Component {
    constructor(props) {
        super(props);
    }
    
    handleVoto(id, valor) {
        this.props.onVoto(id, valor);
    }
      
    render() {
        const cards = [
                {nome: '0', valor :0}, 
                {nome: '1/2', valor :0.5},
                {nome: '1', valor :1},
                {nome: '3', valor :3},
                {nome: '5', valor :5},
                {nome: '8', valor :8},
                {nome: '13', valor :13},
                {nome: '20', valor :20},
                {nome: '40', valor :40},
            ];
            
        const { dataId } = this.props;
        const { handleVoto } = this;
        const voto = this;
        
        //'1/2':0.5,'1':1,'3':3,'5':5,'8':8,'13':13,'20':20,'40':40};
        //const cards = [0,0.5,1,3,5,8,13,20,40];
        
        return (
            <ul className="dropdown-menu">
                {cards.map(function(carta, index) {
                        return (
                            <li key={index}>
                                <a onClick={handleVoto.bind(voto, dataId, carta.valor)}>{carta.nome}</a>
                            </li>    
                        );
                })}
            </ul>
        )
    }
}

export default Cartas;
