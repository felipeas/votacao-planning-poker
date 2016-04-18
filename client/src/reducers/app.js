import {
  APP_SET_USUARIO
} from '../actions/app';

const initialState = {
    usuario: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case APP_SET_USUARIO:
            return Object.assign({}, state, {
                usuario: action.usuario
            });
        default:
            return state;
        }
}
