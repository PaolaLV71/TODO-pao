import React, { useState } from 'react';
import { TodoTitle } from './types';

interface Props {
  onCreatedTodo: (title: TodoTitle) => void;
}

// Componente funcional AddTodo que recibe props
export const AddTodo: React.FC<Props> = ({ onCreatedTodo }) => {
  // Estado local para el texto del input
  const [texto, setTexto] = useState<string>('');

  // Función que se ejecuta al hacer clic en el botón
  const handleClick = () => {
    // Llama a la función onCreatedTodo pasando el título
    onCreatedTodo({ title: texto });
  };

  return (
    <div>
      {/* Input para ingresar el texto del nuevo todo */}
      <input
        type="text"
        value={texto}
        onChange={(evente) => {
          console.log(evente.target.value); // Muestra el valor del input en la consola
          setTexto(evente.target.value); // Actualiza el estado con el valor del input
        }}
      />
      {/* Botón para agregar el nuevo todo */}
      <button onClick={handleClick}>agregar </button>
    </div>
  );
};
