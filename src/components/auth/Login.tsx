import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginApi } from "../../api/auth";

const Login = () => {
  //유효성 검사, 이메일@ . 포함/ 비밀번호 8자 이상
  //로그인 하고 올바른 응답시에 로컬스토리지 이동
  //토큰 유효하지 않을 시 로그인페이지로 리다이렉트
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { email, password } = inputs;

  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const submitLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: inputs.email,
      password: inputs.password,
    };
    const res = await loginApi(data);
    localStorage.setItem("accessToken", res.data.token);
    navigate("/todo");
  };
  return (
    <SignForm onSubmit={submitLogin}>
      <label>Login</label>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={email}
        onChange={onChangeHandler}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
      <button>로그인</button>
    </SignForm>
  );
};

export default Login;

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
`;
