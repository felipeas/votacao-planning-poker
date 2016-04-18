import {
  SPRINT_ADD,
  SPRINT_DEL,
  SPRINT_LIST_SET,
} from '../actions/sprint';

const initialState = {
    sprints: [{
        nome: 'React',
    }, {
        nome: 'Redux',
    }, {
        nome: 'React router',
    }],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SPRINT_LIST_SET:
            return {
                sprints: action.lista
            };
        case SPRINT_ADD:
            DEBUGGER;
            return Object.assign({}, state, {
                sprints: [...state.sprints, action.sprint]
            });

        case SPRINT_DEL:
            return {
                ...state,
                sprints: [
                    ...state.sprints.slice(0, action.index),
                    ...state.sprints.slice(+action.index + 1),
                ],
            };

        default:
            return state;
    }
}
