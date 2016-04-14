import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { fazerLogin } from './login';

export function criarConta(dados) {
    return dispatch => post('conta', dados).then(() => {
        dispatch(fazerLogin(dados.email, dados.senha));
        dispatch(pushState(null, '/'));
    });
}
