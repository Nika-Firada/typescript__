import React, { FC } from "react";
import { ITodo } from "../types/data";
import TodoItem from "./TodoItem";

interface ITodoListProps {
  items: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: FC<ITodoListProps> = ({ items, toggleTodo, removeTodo }) => {
  return (
    <div>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
