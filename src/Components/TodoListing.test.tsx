import { act, getByRole, render, screen } from '@testing-library/react';
import { v4 as uuid } from 'uuid';
import { TodoItem } from './Todo';
import { TodoListing } from './TodoListing';

describe('Todo listing', () => {
  it('render items in order', () => {
    const createItem = (content: string): TodoItem<string> => ({
      content,
      id: uuid(),
    });
    const items = [
      createItem('buy icecream'),
      createItem('find spoon'),
      createItem('eat icecream'),
      createItem('buy more icecream'),
    ];
    render(<TodoListing items={items} />);

    const listItems = screen.getByRole('list').querySelectorAll('li');

    expect(listItems[0].textContent).toEqual('buy icecream');
    expect(listItems[1].textContent).toEqual('find spoon');
    expect(listItems[2].textContent).toEqual('eat icecream');
    expect(listItems[3].textContent).toEqual('buy more icecream');
  });
});
