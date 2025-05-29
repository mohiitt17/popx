import { createContext, useRef, useState } from "react";

export const LogicContext = createContext({
  emailRef: null,
  passRef: null,
  fullNameRef: null,
  phoneRef: null,
  companyRef: null,
  passwordCreateRef: null,
  handleInput: () => {},
  formValid: false,
});

export const LogicProvider = ({ children }) => {
  const emailRef = useRef();
  const passRef = useRef();
  const fullNameRef = useRef();
  const phoneRef = useRef();
  const companyRef = useRef();
  const passwordCreateRef = useRef();

  const [formValid, setFormValid] = useState(false);

  const handleInput = () => {
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    setFormValid(email !== "" && pass !== "");
  };

  return (
    <LogicContext.Provider
      value={{
        emailRef,
        passRef,
        fullNameRef,
        phoneRef,
        companyRef,
        passwordCreateRef,
        formValid,
        handleInput,
      }}
    >
      {children}
    </LogicContext.Provider>
  );
};
