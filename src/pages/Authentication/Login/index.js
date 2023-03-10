import React, { memo } from "react";
import LoginComponent from "../../../components/modules/Authentication/Login";
import View from "../../../components/modules/View";

const Login = memo(() => {
  return (
    <View nocontent noupperfooter nolowerfooter nomiddlefooter>
      <LoginComponent />
    </View>
  )
});

export default Login;
