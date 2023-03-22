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
      <div className="todo-item">
        <span
          data-completed={isCompleted ? true : undefined}
          onClick={onItemClicked}
        >
          {content}
        </span>
        <button onClick={onDeleteItemClicked}>delete</button>
      </div>
    </li>
  );
};
