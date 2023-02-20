import React, { memo } from "react";
import RecoverPassComponent from "../../../components/modules/Authentication/RecoverPassword";
import Navbar from "../../../components/modules/Navbar";

const RecoverPassword = memo(() => {
  return (
    <>
      <Navbar nocontent />
      <RecoverPassComponent />
    </>
  )
});

export default RecoverPassword;
