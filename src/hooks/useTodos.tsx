import { useMemo, useState } from 'react';
import { TodoItemProps } from '../components/TodoItem';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItemProps['item'][]>([]);

  const completed = useMemo(
    () => todos.filter((todo) => todo.isCompleted),
    [todos]
  );
  const pending = useMemo(
    () => todos.filter((todo) => !todo.isCompleted),
    [todos]
  );

  const addTodo = (todo: TodoItemProps['item']) => setTodos([...todos, todo]);

  const toggleTodo = (id: string) => {
    const updatedTodos = [...todos];
    updatedTodos.forEach((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return { todos, completed, pending, addTodo, toggleTodo, removeTodo };
};
