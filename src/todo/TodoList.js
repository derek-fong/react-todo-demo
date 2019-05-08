import React from 'react';

export default function TodoList(props) {
  return (
    <ul>
      {props.todos.map(item => (
        <li key={item.id}>
          {item.detail} ({item.createdAt.toString()})
          <button onClick={() => props.deleteTodo(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}
