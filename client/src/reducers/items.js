const initialState = {
  items: [{
    text: 'React',
  }, {
    text: 'Redux',
  }, {
    text: 'React router',
  }, {
    text: 'Bootstrap webpack',
  }, {
    text: 'Sass modules (sass-loader css-loader style-loader)',
  }, {
    text: 'React transform',
  }, {
    text: 'Redux logger',
  }, {
    text: 'React document meta',
  }, {
    text: 'Redux form',
  }, {
    text: 'Karma',
  }, {
    text: 'Mocha',
  }, {
    text: 'Server-side rendering',
    done: false,
  }],
};

export function items(state = initialState, action) {
  switch (action.type) {
  case 'ADD_ITEM':
    return {
      ...state,
      items: [
        ...state.items, {
          text: action.fields.name.value,
        },
      ],
    };

  case 'DELETE_ITEM':
    return {
      ...state,
      items: [
        ...state.items.slice(0, action.index),
        ...state.items.slice(+action.index + 1),
      ],
    };

  default:
    return state;
  }
}
