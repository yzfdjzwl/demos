import * as at from 'constants/actionTypes';

export function addTodo(text) {
  return {
    type: at.ADD_TODO,
    text,
  };
}

export function toggleTodo(index) {
  return {
    type: at.TOGGLE_TODO,
    index,
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: at.SET_VISIBILITY_FILTER,
    filter,
  };
}
