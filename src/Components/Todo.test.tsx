import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ENTER } from '../testing-utils';
import { Todo } from './Todo';

describe('Todo application', () => {
  it('add a todo list', () => {
    // arrange
    render(<Todo />);
    const input = screen.getByRole('textbox');

    // act
    act(() => {
      userEvent.type(input, 'buy icecream' + ENTER);
    });
    act(() => {
      userEvent.type(input, 'go to the beach' + ENTER);
    });

    // assert
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    expect(screen.getByText(/^buy icecream$/)).toBeInTheDocument();
    expect(screen.getByText(/^go to the beach$/)).toBeInTheDocument();
  });
});
