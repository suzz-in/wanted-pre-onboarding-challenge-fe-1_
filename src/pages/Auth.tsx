import SignUp from "../components/auth/Signup";
import Login from "../components/auth/Login";

import useMode from "../hook/useMode";

import styled from "styled-components";

function Auth() {
  const [loginMode, isLogin, isSingupMode] = useMode();
  return (
    <>
      <AuthContainer>
        {loginMode ? <Login /> : <SignUp />}

        {loginMode ? (
          <Togglebtn onClick={isSingupMode}>회원가입하기</Togglebtn>
        ) : (
          <Togglebtn onClick={isLogin}>로그인</Togglebtn>
        )}
      </AuthContainer>
    </>
  );
}

export default Auth;

const AuthContainer = styled.section`
  display: grid;
  justify-content: space-evenly;
  align-content: space-between;

  background-color: #ffd1d1;
  width: 50vw;
  height: 60vh;

  margin: auto;
  /* padding: 10px; */
  border-radius: 30px;
`;

const Togglebtn = styled.button`
  width: 90%;
  height: 25px;
  border-radius: 5px;
  margin: 20px auto;
  font-size: 1rem;
  outline: none;
  border: none;
  transition: 0.2s ease-in;
  cursor: pointer;
  background-color: #ff9494;
`;
