import {
  VOTACAO_ESTORIA_ADD,
  VOTACAO_TAREFA_ADD,
  VOTACAO_SET,
} from '../actions/votacao';

const initialState = {
    sprint: {
        nome: '',
        estorias: [],
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case VOTACAO_SET:
         
            return Object.assign({}, state, {
                sprint: action.sprint
              });
        case VOTACAO_ESTORIA_ADD:
            
            return Object.assign({}, state, {
                sprint: [...state.sprint, action.votacao]
            });

        case VOTACAO_TAREFA_ADD:
             return Object.assign({}, state, {
                sprint: [...state.estorias, action.votacao]
            });

        default:
            return state;
    }
}
