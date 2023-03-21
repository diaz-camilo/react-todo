import { TodoItem } from './Todo';

type TodoListingProps = { items: TodoItem<string>[] };

export const TodoListing = ({ items }: TodoListingProps) => {
  if (!items || !items?.length) return <></>;

  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>{item.content}</li>
      ))}
    </ol>
  );
};
