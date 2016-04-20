export const SPRINT_ADD = 'SPRINT_ADD';
export const SPRINT_END = 'SPRINT_END';
export const SPRINT_LIST_SET = 'SPRINT_LIST_SET';

import { get, post, put, del } from '../modules/api';

export function carregarLista() {
    return dispatch => get('sprints').then(lista => {
        dispatch(setarSprints(lista));
        // dispatch(pushState(null, '/sprints'));
    });
}

export function addSprint(dados) {
    return dispatch => post('sprints', dados).then(() => {
       addSprintLista(dados);
    });
}

export function endSprint(id) {
    return dispatch => del(`sprints/${id}`).then(() => {
       dispatch(setarSprints(lista));
    });
}

export function endSprint(index) {
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
    return {
        type: SPRINT_ADD,
        dados
    };
}
