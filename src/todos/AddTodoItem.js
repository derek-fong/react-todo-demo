import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

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
        <InputGroup className="mb-3">
          <FormControl
            id="input-detail"
            placeholder="Add a task..."
            value={this.state.detail}
            onChange={this.handleChange}
          />
          <InputGroup.Append>
            <Button disabled={!this.state.detail} type="submit">
              Add
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </form>
    );
  }
}
