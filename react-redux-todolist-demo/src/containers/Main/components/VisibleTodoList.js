import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      console.log(todos);
      return todos;
    case 'SHOW_COMPLETED':
      console.log(todos.filter(t => t.completed));
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      console.log(todos.filter(t => !t.completed));
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.main.todos, state.main.visibilityFilter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick: id => dispatch(toggleTodo(id)),
  };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
