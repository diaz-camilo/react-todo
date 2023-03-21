import { TodoItem, TodoItemProps } from './TodoItem';

type TodoListingProps = {
  items: TodoItemProps['item'][];
  onItemClicked: (id: string) => void;
};
export const TodoListing = ({ items, onItemClicked }: TodoListingProps) => {
  if (!items || !items?.length) return <></>;

  return (
    <ol>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemClicked={() => onItemClicked(item.id)}
        />
      ))}
    </ol>
  );
};
