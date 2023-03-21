import { useState } from 'react';

import { TodoInput } from './TodoInput';
import { TodoListing } from './TodoListing';

export type TodoItem<T> = {
  id: string;
  content: T;
};

export const Todo = () => {
  const [todos, setTodos] = useState<TodoItem<string>[]>([]);

  const onItemAdded = (item: TodoItem<string>) => setTodos([...todos, item]);

  return (
    <>
      <TodoInput onItemAdded={onItemAdded} />
      <TodoListing items={todos} />
    </>
  );
};
