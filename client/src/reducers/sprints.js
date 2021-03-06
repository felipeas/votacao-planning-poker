import {
  SPRINT_ADD,
  SPRINT_END,
  SPRINT_LIST_SET,
} from '../actions/sprint';

const initialState = {
    lista: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SPRINT_LIST_SET:
            return Object.assign({}, state, {
                lista: action.lista
              });
        case SPRINT_ADD:
            return Object.assign({}, state, {
                lista: [...state.lista, action.dados]
            });

        case SPRINT_END:
            debugger;
            return {
                ...state,
                lista: [
                    ...state.lista.slice(0, action.index),
                    ...state.lista.slice(+action.index + 1),
                ],
            };

        default:
            return state;
    }
}
