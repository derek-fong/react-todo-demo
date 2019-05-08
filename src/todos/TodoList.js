import moment from 'moment';
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
          <th>Created At</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.detail}</td>
            <td>{moment(item.createdAt).format('dddd DD/MM/YYYY HH:mm')}</td>
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
