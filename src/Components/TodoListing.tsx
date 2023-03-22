import { TodoItem, TodoItemProps } from './TodoItem';

type TodoListingProps = {
  items: TodoItemProps['item'][];
  onItemClicked: (id: string) => void;
  onDeleteButtonClicked: (id: string) => void;
};
export const TodoListing = ({
  items,
  onItemClicked,
  onDeleteButtonClicked,
}: TodoListingProps) => {
  if (!items || !items?.length) return <></>;

  return (
    <ol>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onItemClicked={() => onItemClicked(item.id)}
          onDeleteButtonClicked={() => onDeleteButtonClicked(item.id)}
        />
      ))}
    </ol>
  );
};
