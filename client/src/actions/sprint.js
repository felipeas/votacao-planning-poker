export const SPRINT_ADD = 'SPRINT_ADD';
export const SPRINT_END = 'SPRINT_END';
export const SPRINT_LIST_SET = 'SPRINT_LIST_SET';

import { get, post, put, del } from '../modules/api';
import { pushState } from 'redux-router';

export function carregarLista() {
    return dispatch => get('sprints').then(lista => {
        dispatch(setarSprints(lista));
    });
}

export function addSprint(dados) {
    return dispatch => post('sprints', dados).then(() => {
        return dispatch(addSprintLista(dados));
        //dispatch(pushState(null, '/sprints'));
    });
}

export function endSprint(id) {
    return dispatch => del(`sprints/${id}`).then(() => {
        return dispatch(carregarLista());
        //dispatch(pushState(null, '/sprints'));
    });
}

export function setarSprints(lista) {
    return {
        type: SPRINT_LIST_SET,
        lista
    };
}

export function addSprintLista(dados) {
    return {
        type: SPRINT_ADD,
        dados
    };
}
