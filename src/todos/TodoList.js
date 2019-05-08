import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default function TodoList(props) {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Detail</th>
          <th>Created</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.detail}</td>
            <td>{item.createdAt.toString()}</td>
            <td>
              <Button
                variant="outline-danger"
                onClick={() => props.deleteTodo(item.id)}
              >
                Remove
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
