export type TodoItemProps = {
  item: {
    id: string;
    content: string;
    isCompleted: boolean;
  };
  onItemClicked: () => void;
};

export const TodoItem = ({
  item: { id, content, isCompleted },
  onItemClicked,
}: TodoItemProps) => {
  return (
    <li
      key={id}
      className="todo-item"
      data-completed={isCompleted ? true : undefined}
      onClick={onItemClicked}
    >
      {content}
    </li>
  );
};
