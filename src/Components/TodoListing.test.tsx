import { act, getByRole, render, screen } from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import { TodoItemProps } from './TodoItem';
import { TodoListing } from './TodoListing';

describe('Todo listing', () => {
  it('render items in order', () => {
    const createItem = (content: string): TodoItemProps['item'] => ({
      content,
      id: uuid(),
      isCompleted: false,
    });
    const items = [
      createItem('buy icecream'),
      createItem('find spoon'),
      createItem('eat icecream'),
      createItem('buy more icecream'),
    ];
    render(<TodoListing items={items} onItemClicked={() => null} />);

    const listItems = screen.getByRole('list').querySelectorAll('li');

    expect(listItems[0].textContent).toEqual('buy icecream');
    expect(listItems[1].textContent).toEqual('find spoon');
    expect(listItems[2].textContent).toEqual('eat icecream');
    expect(listItems[3].textContent).toEqual('buy more icecream');
  });

  it("doesn't render a list element <ol/> or <ul/> if no items", () => {
    render(<TodoListing items={[]} onItemClicked={() => null} />);

    const list = screen.queryByRole('list');

    expect(list).not.toBeInTheDocument();
  });
});
