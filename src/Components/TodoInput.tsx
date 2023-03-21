import { useState, KeyboardEvent, ChangeEvent } from 'react';

import { v4 as uuid } from 'uuid';
import { TodoItemProps } from './TodoItem';

type TodoInputProps = { onItemAdded: (item: TodoItemProps['item']) => void };

export const TodoInput = ({ onItemAdded }: TodoInputProps) => {
  const [userInput, setUserInput] = useState<string>('');

  const handleKeyDown = (ev: KeyboardEvent<HTMLElement>) => {
    if (ev.key === 'Enter' && userInput.trim()) {
      onItemAdded({
        id: uuid(),
        content: userInput.trim(),
        isCompleted: false,
      });
      setUserInput('');
    }
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setUserInput(ev.target.value);

  return (
    <input
      data-testid={'todo-input'}
      type={'text'}
      value={userInput}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
