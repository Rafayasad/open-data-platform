import React, { memo } from "react";
import LoginComponent from "../../../components/modules/Authentication/Login";
import Navbar from "../../../components/modules/Navbar";

const Login = memo(() => {
  return (
    <>
      <Navbar nocontent />
      <LoginComponent />
    </>
  )
});

export default Login;
