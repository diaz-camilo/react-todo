import { useTodos } from '../hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoListing } from './TodoListing';

export const Todo = () => {
  const { todos, addTodo, toggleTodo } = useTodos();

  return (
    <>
      <TodoInput onItemAdded={addTodo} />
      <TodoListing items={todos} onItemClicked={toggleTodo} />
    </>
  );
};
