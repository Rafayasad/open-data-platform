import React, { memo } from "react";
import RegisterComponent from "../../../components/modules/Authentication/Register";
import Navbar from "../../../components/modules/Navbar";
import View from "../../../components/modules/View";

const Register = memo(() => {
  return (
    <View nocontent>
      <RegisterComponent />
    </View>
  )

});

export default Register;
