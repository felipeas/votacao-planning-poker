import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { setLoginVisible, setUsuarioLogado } from './app';

export function fazerLogin(email, senha) {
    return dispatch => post('login', { email, senha }).then(usuario => {
        localStorage.setItem('credentials', btoa(`${email}:${senha}`));
        dispatch(setUsuarioLogado(usuario));
        dispatch(setLoginVisible(false));
    });
}

export function fazerLogout() {
    return dispatch => {
        localStorage.removeItem('credentials');
        dispatch(setUsuarioLogado(null));
        dispatch(pushState(null, '/'));
    };
}
