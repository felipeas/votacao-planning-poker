import { browserHistory } from 'react-router';
import { pushState } from 'redux-router';
import { post } from '../modules/api';
import { setUsuario } from './app';

export function fazerLogin(email, senha, goHome) {
    return dispatch => post('login', { email, senha }).then(usuario => {
        localStorage.setItem('credentials', btoa(`${email}:${senha}`));
        dispatch(setUsuario(usuario));
        
        if (goHome) {
            const path = `/home/`;
            browserHistory.push(path); 
        }  
    });
}

export function fazerLogout() {
    return dispatch => {
        localStorage.removeItem('credentials');
        dispatch(setUsuario(null));
        const path = `/home/`;
        browserHistory.push(path);
    };
}
