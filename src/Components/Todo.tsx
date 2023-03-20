import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';

type TodoItem<T> = {
  id: string;
  content: T;
};

export const Todo = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [todos, setTodos] = useState<TodoItem<string>[]>([]);

  const handleKeyDown = (ev: KeyboardEvent<HTMLElement>) => {
    if (ev.key === 'Enter') {
      setTodos([...todos, { id: uuid(), content: userInput.trim() }]);
      setUserInput('');
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setUserInput(ev.target.value);

  return (
    <div>
      <input
        data-testid={'todo-input'}
        type={'text'}
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
};
