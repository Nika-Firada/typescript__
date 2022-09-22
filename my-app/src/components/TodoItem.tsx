import React, { FC } from "react";
import { ITodo } from "../types/data";

interface ItodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoItem: FC<ItodoItem> = ({
  id,
  title,
  complete,
  toggleTodo,
  removeTodo,
}) => {
  return (
    <div>
      <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
      <span style={{display: 'inline-block', margin: '0 10px'}}>{title}</span>
      <button style={{background: 'transparent',border:'none', outline:'none', color:'red', cursor:'pointer'}} onClick={() => removeTodo(id)}>X</button>
    </div>
  );
};

export default TodoItem;
