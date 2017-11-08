import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AddTodo from './components/AddTodo';
import VisibleTodoList from './components/VisibleTodoList';
import Footer from './components/Footer';
import { addTodo, setVisibilityFilter } from './actions';
import { VisibilityFilters } from 'constants/actionTypes';

function selectTodos(todos, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

function mapStateToProps(state) {
  return {
    todos: selectTodos(state.main.todos, state.main.visibilityFilter),
    visibilityFilter: state.main.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onAddClick: text => dispatch(addTodo(text)),
    onFilterChange: nextFilter => dispatch(setVisibilityFilter(nextFilter)),
  };
}

class Main extends Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={this.props.onAddClick}
        />
        <VisibleTodoList />
        <Footer
          onFilterChange={this.props.onFilterChange}
          visibilityFilter={this.props.visibilityFilter}
        />
      </div>
    );
  }
}

Main.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE',
  ]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
