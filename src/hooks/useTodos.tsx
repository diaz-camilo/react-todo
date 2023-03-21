import { useState } from 'react';
import { TodoItemProps } from '../components/TodoItem';

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoItemProps['item'][]>([]);

  const addTodo = (todo: TodoItemProps['item']) => setTodos([...todos, todo]);

  const toggleTodo = (id: string) => {
    const updatedTodos = [...todos];
    updatedTodos.forEach((todo) => {
      if (todo.id === id) todo.isCompleted = !todo.isCompleted;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id: string) => {
    const todoIndex = todos.findIndex((todo) => todo.id);
    if (typeof todoIndex === 'number') {
      const updatedTodos = [...todos];
      updatedTodos.splice(todoIndex, 1);
      setTodos(updatedTodos);
    }
  };

  return { todos, addTodo, toggleTodo, removeTodo };
};
