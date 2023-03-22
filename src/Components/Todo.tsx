import { useMemo, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoInput } from './TodoInput';
import { TodoListing } from './TodoListing';

type selected = 'all' | 'pending' | 'completed';

export const Todo = () => {
  const { todos, completed, pending, addTodo, toggleTodo, removeTodo } =
    useTodos();

  const [selected, setSelected] = useState<selected>('all');

  const todosToDisplay =
    selected === 'completed'
      ? completed
      : selected === 'pending'
      ? pending
      : todos;

  return (
    <>
      <TodoInput onItemAdded={addTodo} />
      <div>
        <button onClick={() => setSelected('all')}>
          show all [{todos.length}]
        </button>
        {' | '}
        <button onClick={() => setSelected('pending')}>
          show pending [{pending.length}]
        </button>
        {' | '}
        <button onClick={() => setSelected('completed')}>
          show completed [{completed.length}]
        </button>
      </div>
      <TodoListing
        items={todosToDisplay}
        onItemClicked={toggleTodo}
        onDeleteButtonClicked={removeTodo}
      />
    </>
  );
};
