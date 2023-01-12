import { useCallback, useContext, useState } from "react";
import styled from "styled-components";
import { deleteTodoApi, updateTodoApi } from "../../api/todo";
import { DispatchContext } from "../../context/contextTodo";

const TodoItem = ({ list }) => {
  const [editMode, setEditMode] = useState(false);
  const [item, setItem] = useState(list);
  const dispatch = useContext(DispatchContext);

  const editChange = useCallback(
    (e) => {
      setItem({ ...item, [e.target.name]: e.target.value });
    },
    [item]
  );

  const handleUpDate = useCallback(
    async (id) => {
      const data = {
        title: item.title,
        content: item.content,
      };
      await updateTodoApi(id, data).then((res) => {
        setEditMode(false);
        dispatch({ type: "EDIT", payload: res.data.data });
      });
    },
    [list, item]
  );

  const handleDelete = useCallback(
    (id) => {
      deleteTodoApi(id).then((res) => {
        console.log(res);
        dispatch({ type: "DELETE", id });
      });
    },
    [list]
  );

  const handleCancel = () => {
    setItem({ ...item, title: list.title, content: list.content });
    setEditMode(false);
  };

  return (
    <>
      {editMode ? (
        <>
          <EditItemWrap>
            <EditTextContainer>
              <input defaultValue={item.title} name="title" onChange={editChange} />
              <input defaultValue={item.content} name="content" onChange={editChange} />
            </EditTextContainer>
            <BtnDiv>
              <button onClick={handleCancel}>취소</button>
              <button onClick={() => handleUpDate(item.id)}>완료</button>
            </BtnDiv>
          </EditItemWrap>
        </>
      ) : (
        <>
          <ItemWarp>
            <TextContainer>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
            </TextContainer>
            <BtnDiv>
              <button onClick={() => setEditMode(true)}>수정</button>
              <button
                onClick={() => {
                  handleDelete(item?.id);
                }}
              >
                삭제
              </button>
            </BtnDiv>
          </ItemWarp>
        </>
      )}
    </>
  );
};
export default TodoItem;

const ItemWarp = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  border: 4px solid var(--color-beige);
  border-radius: 8px;
  padding: 5px;
  height: 10vh;
`;
const EditItemWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  border: 4px solid var(--color-beige);
  border-radius: 8px;
  padding: 5px;
  height: 16vh;
`;

const EditTextContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: 0.6fr 0.4fr;
  h4 {
    margin: auto;
  }
  p {
    margin: auto;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  width: 8vw;
  margin: auto;
  button {
    background-color: var(--color-beige);
    border: none;
    border-radius: 2px;
    width: 3vw;
    height: 3vh;
    margin: 4px;
  }
`;
