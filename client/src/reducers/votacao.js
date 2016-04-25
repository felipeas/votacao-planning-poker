import {
  SPRINT_ADD,
  SPRINT_END,
  SPRINT_LIST_SET,
} from '../actions/sprint';

const initialState = {
    estorias: [{nome: "1 - LALALAL", tarefas: [{nome: "tarefa 1"},{nome: "tarefa 2"}]}],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SPRINT_LIST_SET:
            return Object.assign({}, state, {
                estorias: action.estorias
              });
        case SPRINT_ADD:
            debugger;
            return Object.assign({}, state, {
                estorias: [...state.estorias, action.sprint]
            });

        case SPRINT_END:
            return {
                ...state,
                estorias: [
                    ...state.estorias.slice(0, action.index),
                    ...state.estorias.slice(+action.index + 1),
                ],
            };

        default:
            return state;
    }
}
