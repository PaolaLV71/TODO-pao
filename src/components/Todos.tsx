import React from 'react';
import { Todo } from './Todo';
import { TodoId, type ListOfTodos } from './types';

interface Props {
  //Es una forma de pasarle parametros a los tipos
  todos: ListOfTodos;
  onRemoveTodo: (id: TodoId) => void;
}
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
          />
        </li>
      ))}
    </ul>
  );
};
