import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTodosApi } from "../api/todo";
import CreateTodo from "../components/todo/CreateTodo";
import TodoList from "../components/todo/TodoList";
import TodoContextWrap from "../context/contextTodo";

function Todo() {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const getData = () => {
      getTodosApi()
        .then((res) => {
          navigate("/todo");
        })
        .catch(() => {
          navigate("/");
        });
    };
    getData();
  }, []);

  return (
    <TodoContextWrap>
      <TodoContainer>
        <LogouBtn onClick={logOut}>logout</LogouBtn>
        <h2>오늘의 할 일을 입력해보세요 !</h2>

        <CreateTodo />
        <TodoList />
      </TodoContainer>
    </TodoContextWrap>
  );
}

export default Todo;

const TodoContainer = styled.section`
  display: grid;
  align-content: space-around;

  background-color: #ffd1d1;
  width: 60vw;
  height: auto;

  margin: auto;
  border-radius: 30px;

  h2 {
    margin: 5vh auto 3vh auto;
  }
`;

const LogouBtn = styled.button`
  width: 5vw;
  margin-left: 53vw;
  border: none;
`;
