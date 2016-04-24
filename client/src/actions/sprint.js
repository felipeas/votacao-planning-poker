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
        dispatch(pushState(null, '/sprints'));
    });
}

export function endSprint(id) {
    return dispatch => del(`sprints/${id}`).then(() => {
        dispatch(pushState(null, '/sprints'));
    });
}

export function removerSprintLista(index) {
    debugger;
    return {
        type: SPRINT_END,
        index,
    };
}

function setarSprints(lista) {
    return {
        type: SPRINT_LIST_SET,
        lista
    };
}

function addSprintLista(dados) {
    debugger;
    return {
        type: SPRINT_ADD,
        dados
    };
}
