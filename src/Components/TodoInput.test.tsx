import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ENTER } from '../testing-utils';
import { TodoInput } from './TodoInput';

describe('Todo input component', () => {
  it('renders the input field', () => {
    render(<TodoInput onItemAdded={jest.fn()} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  it('submit the item, trim white space and clear input', () => {
    const onItemAdded = jest.fn();
    render(<TodoInput onItemAdded={onItemAdded} />);
    const input = screen.getByRole('textbox');
    const userInput = '   buy icecream   ';

    act(() => {
      userEvent.type(input, userInput + ENTER);
    });

    expect(onItemAdded).toHaveBeenCalledTimes(1);
    expect(onItemAdded).toHaveBeenCalledWith(
      expect.objectContaining({ content: 'buy icecream' })
    );
    expect(input).toHaveValue('');
  });

  it("doesn't submit anything if input is empty or only white space", () => {
    const onItemAdded = jest.fn();
    render(<TodoInput onItemAdded={onItemAdded} />);
    const input = screen.getByRole('textbox');
    const userInputs = ['   ', ''];

    act(() => {
      userEvent.type(input, userInputs[0] + ENTER);
    });
    act(() => {
      userEvent.type(input, userInputs[1] + ENTER);
    });

    expect(onItemAdded).toHaveBeenCalledTimes(0);
  });
});
