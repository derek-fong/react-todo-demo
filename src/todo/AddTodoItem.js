import React, { Component } from 'react';

export default class AddTodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ detail: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.detail);
    this.setState({ detail: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="input-detail">
          Add TODO:
          <input
            id="input-detail"
            value={this.state.detail}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" disabled={!this.state.detail}>
          Add
        </button>
      </form>
    );
  }
}
