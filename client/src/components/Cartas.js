import React, { Component, PropTypes } from 'react';


class Card extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const cards = [
                {nome: '0', valor :0}, 
                {nome: '1/2', valor :0.5},
                {nome: '3', valor :3},
                {nome: '5', valor :5},
                {nome: '8', valor :8},
                {nome: '13', valor :13},
                {nome: '20', valor :20},
                {nome: '40', valor :40},
            ];
        
        
        //'1/2':0.5,'1':1,'3':3,'5':5,'8':8,'13':13,'20':20,'40':40};
        //const cards = [0,0.5,1,3,5,8,13,20,40];
        
        return (
            <ul className="dropdown-menu pull-right">
                {cards.map(function(carta) {
                        return (
                            <li>
                                <a>{carta.nome}|{carta.valor}</a>
                            </li>    
                        );
                })}
            </ul>
        )
    }
}

export default Card;
