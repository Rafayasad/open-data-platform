import React, { memo } from "react";
import RegisterComponent from "../../../components/modules/Authentication/Register";
import Navbar from "../../../components/modules/Navbar";

const Register = memo(() => {
  return (
    <>
      <Navbar nocontent />
      <RegisterComponent />
    </>
  )

});

export default Register;
