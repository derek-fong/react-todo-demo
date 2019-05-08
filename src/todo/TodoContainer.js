import React, { Component, Fragment } from 'react';

import AddTodoItem from './AddTodoItem';
import TodoList from './TodoList';

function getRandomId() {
  return Math.floor(Math.random() * Math.floor(1000));
}

export default class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: getRandomId(),
          detail: 'Sample item 1',
          createdAt: new Date()
        },
        {
          id: getRandomId(),
          detail: 'Sample item 2',
          createdAt: new Date()
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleDeleteTodo = this.handleDeleteTodo.bind(this);
  }

  handleAddTodo(todoDetail) {
    const newTodoItem = {
      id: getRandomId(),
      detail: todoDetail,
      createdAt: new Date()
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodoItem]
    }));
  }

  handleDeleteTodo(id) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <Fragment>
        <AddTodoItem addTodo={this.handleAddTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.handleDeleteTodo} />
      </Fragment>
    );
  }
}
