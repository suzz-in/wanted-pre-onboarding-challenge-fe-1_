import { useContext, useEffect } from "react";
import { getTodosApi } from "../../api/todo";
import { DispatchContext, TodoContext } from "../../context/contextTodo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const TodoData = useContext(TodoContext);
  const dispatch = useContext(DispatchContext);

  const getTodoData = async () => {
    await getTodosApi().then((res) => {
      dispatch({ type: "INIT", initTodo: res.data.data });
    });
  };

  useEffect(() => {
    getTodoData();
  }, []);

  return (
    <article>
      {TodoData?.map((todo) => (
        <TodoItem key={todo.id} list={todo} />
      ))}
    </article>
  );
};

export default TodoList;
