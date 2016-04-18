export const SPRINT_ADD = 'SPRINT_ADD';
export const SPRINT_DEL = 'SPRINT_DEL';
export const SPRINT_LIST_SET = 'SPRINT_LIST_SET';

import { get, post, put } from '../modules/api';

export function carregarLista() {
    return dispatch => get('sprints').then(lista => {
        dispatch(setarSprints(lista));
    });
}

export function addSprint(dados) {
    debugger;
    return dispatch => post('sprint', dados).then(() => {
       carregarLista();
    });
}

export function removerSprint(index) {
    return {
        type: SPRINT_DEL,
        index,
    };
}

function setarSprints(lista) {
    return {
        type: SPRINT_LIST_SET,
        lista
    };
}
