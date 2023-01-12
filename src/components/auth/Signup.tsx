import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { signUpApi } from "../../api/auth";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitHandler = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    if (!email.includes("@")) {
      alert("이메일 형식을 확인해주세요");
    }
    if ([...password].length < 8) {
      alert("비밀번호는 8자 이상 입력해주세요");
    } else {
      console.log(data);
      await signUpApi(data);
      alert("회원가입 완료!");
    }
  };
  return (
    <SignForm onSubmit={submitHandler}>
      <label>SingUp</label>
      <input
        type="text"
        name="email"
        placeholder="email"
        // required=""
        value={email}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        name="password"
        // required=""
        placeholder="password"
        value={password}
        onChange={onChangeHandler}
      />
      <button>회원가입</button>
    </SignForm>
  );
};

export default SignUp;

const SignForm = styled.form`
  width: 100%;

  margin: auto;
  align-content: space-between;

  display: grid;
  label {
    font-size: 2.3rem;
    font-weight: bold;
    justify-content: center;
    display: flex;
    margin: 40px;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    margin: 20px auto auto auto;
    padding: 3px;
  }

  button {
    width: 90%;
    height: 40px;
    border-radius: 5px;
    margin: 20px auto;
    font-size: 1.3rem;
    outline: none;
    border: none;
    transition: 0.2s ease-in;
    cursor: pointer;
    background-color: #ff9494;
  }
  div {
    background-color: green;
  }
`;
