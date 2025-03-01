import React from 'react';
import { TodoId, type Todo as TodoType } from './types';
interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void;
  onCompletedTodo: (id: TodoId) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onCompletedTodo,
}) => {
  return (
    <div
      className="view"
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
        alignItems: 'center',
      }}
    >
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={() => {
          onCompletedTodo({ id });
        }}
        style={{
          transform: 'scale(3)',
        }}
      />
      <label>{title}</label>
      <button
        className="destroy"
        style={{
          borderRadius: '50%',
          backgroundColor: 'red',
          height: 30,
          width: 30,
          cursor: 'pointer',
        }}
        onClick={() => {
          onRemoveTodo({ id });
        }}
      >
        x
      </button>
    </div>
  );
};
