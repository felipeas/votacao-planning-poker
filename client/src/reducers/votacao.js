import {
  VOTACAO_ESTORIA_ADD,
  VOTACAO_TAREFA_ADD,
  VOTACAO_SET,
} from '../actions/votacao';

const initialState = {
    sprint: {
        nome: '',
        estorias: [],
    },
    id: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
       
        case VOTACAO_SET:
            return Object.assign({}, state, {
                sprint: action.votacao,
                id: action.votacao._id
              });
           
        case VOTACAO_ESTORIA_ADD:
            return Object.assign({}, state, {
                sprint: [...state.sprint.estorias, action.estoria]
            });

        case VOTACAO_TAREFA_ADD:
             return Object.assign({}, state, {
                sprint: [...state.estorias, action.votacao]
            });

        default:
            return state;
    }
}
