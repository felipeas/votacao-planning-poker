import {
  APP_SET_USUARIO_LOGADO
} from '../actions/app';

const initialState = {
  usuarioLogado: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case APP_SET_USUARIO_LOGADO:
        debugger;
      return Object.assign({}, state, {
        usuarioLogado: action.usuario

      });
    default:
      return state;
  }
}
