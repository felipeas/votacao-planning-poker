import {
  VOTACAO_ESTORIA_ADD,
  VOTACAO_TAREFA_ADD,
  VOTACAO_SET,
} from '../actions/votacao';

const initialState = {
    estorias: [
        {nome: "1 - LALALAL", 
            tarefas: [
                {nome: "tarefa 1"},
                {nome: "tarefa 2"}
            ]
        },
        {nome: "2 - Heheheh",
            tarefas: [
                {nome: "123cc"},
                {nome: "123cC"}
            ]    
        }
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case VOTACAO_SET:
            return Object.assign({}, state, {
                estorias: action.estorias
              });
        case VOTACAO_ESTORIA_ADD:
            
            return Object.assign({}, state, {
                estorias: [...state.estorias, action.votacao]
            });

        case VOTACAO_TAREFA_ADD:
             return Object.assign({}, state, {
                estorias: [...state.estorias, action.votacao]
            });

        default:
            return state;
    }
}
