import React, { JSX, useState } from 'react';
import { Todos } from './components/Todos';
import { Todo, TodoId } from './components/types';

const mockTodos = [
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
  return (
    <div className="todoapp">
      <Todos onRemoveTodo={handleRemove} todos={todos} />
    </div>
  );
};

export default App;
