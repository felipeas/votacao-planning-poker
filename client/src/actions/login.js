import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { setUsuario } from './app';

export function fazerLogin(email, senha) {
    return dispatch => post('login', { email, senha }).then(usuario => {
        localStorage.setItem('credentials', btoa(`${email}:${senha}`));
        dispatch(setUsuario(usuario));
    });
}

export function fazerLogout() {
    return dispatch => {
        localStorage.removeItem('credentials');
        dispatch(setUsuario(null));
        dispatch(pushState(null, '/'));
    };
}
