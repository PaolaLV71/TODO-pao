import React, { JSX, useState } from 'react';
import { Todos } from './components/Todos';
import { Todo, TodoId, TodoTitle } from './components/types';
import { AddTodo } from './components/addTodo';

const mockTodos: Todo[] = [
  {
    id: '1',
    title: 'Gato',
    completed: true,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  },
];

const App = (): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>(mockTodos);
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const onCompletedTodo = ({ id }: TodoId): void => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        return {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const onCreatedTodo = ({ title }: TodoTitle) => {
    console.log(title);

    const nuevoTodo: Todo = {
      id: (todos.length + 1).toString(),
      title: title,
      completed: false,
    };

    setTodos([...todos, nuevoTodo]);
  };

  return (
    <div
      className="todoapp"
      style={{
        fontSize: 50,
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <AddTodo onCreatedTodo={onCreatedTodo} />
        <Todos
          onRemoveTodo={handleRemove}
          todos={todos}
          onCompletedTodo={onCompletedTodo}
        />
      </div>
    </div>
  );
};

export default App;
