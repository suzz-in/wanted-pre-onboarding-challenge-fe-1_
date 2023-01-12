import { useCallback, useState } from "react";

const useMode = () => {
  const [loginMode, setLoginMode] = useState(false);

  const isLogin : React.MouseEventHandler<HTMLButtonElement>= useCallback(() => {
    setLoginMode(true);
  }, []);
  const isSingupMode : React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setLoginMode(false);
  }, []);

  return [loginMode, isLogin, isSingupMode];
};

export default useMode;
