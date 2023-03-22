export type TodoItemProps = {
  item: {
    id: string;
    content: string;
    isCompleted: boolean;
  };
  onItemClicked: () => void;
  onDeleteButtonClicked: () => void;
};

export const TodoItem = ({
  item: { id, content, isCompleted },
  onItemClicked,
  onDeleteButtonClicked: onDeleteItemClicked,
}: TodoItemProps) => {
  return (
    <li>
      <span
        key={id}
        className="todo-item"
        data-completed={isCompleted ? true : undefined}
        onClick={onItemClicked}
      >
        {content}
      </span>
      <button
        data-testid={`todo-item-delete-btn-${id}`}
        onClick={onDeleteItemClicked}
      >
        delete
      </button>
    </li>
  );
};
