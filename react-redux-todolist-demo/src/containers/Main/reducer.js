import * as at from 'constants/actionTypes';

const INITIAL_STATE = {
  visibilityFilter: at.VisibilityFilters.SHOW_ALL,
  todos: [],
};

export default function main(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo, index) => {
          if (index === action.index) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });
    case at.ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      });
    case at.SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter,
      });
    default:
      return state;
  }
}
