import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { v4 } from 'uuid';
import { TodoItem, TodoItemProps } from './TodoItem';

describe('todo item', () => {
  const incompleteItem: TodoItemProps['item'] = {
    id: v4(),
    content: 'buy icecream',
    isCompleted: false,
  };

  const completedItem: TodoItemProps['item'] = {
    ...incompleteItem,
    isCompleted: true,
  };

  it('render the incomplete item', () => {
    render(<TodoItem item={incompleteItem} onItemClicked={() => null} />);
    const listItem = screen.getByText(/^buy icecream$/);

    expect(listItem).not.toHaveAttribute('data-completed');
    expect(listItem).toBeInTheDocument();
  });

  it('render the completed item', () => {
    render(<TodoItem item={completedItem} onItemClicked={() => null} />);
    const listItem = screen.getByText(/^buy icecream$/);

    expect(listItem).toHaveAttribute('data-completed');
    expect(listItem).toBeInTheDocument();
  });

  it('call onItemClicked callback when clicked', () => {
    const onItemClicked = jest.fn();
    render(<TodoItem item={incompleteItem} onItemClicked={onItemClicked} />);
    const listItem = screen.getByText(/^buy icecream$/);

    act(() => {
      userEvent.click(listItem);
    });

    expect(onItemClicked).toHaveBeenCalledTimes(1);
  });
});
