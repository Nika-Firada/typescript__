import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITodo } from "../types/types";
import List from "./List";
import TodoItem from "./TodoItem";


const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const res = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
