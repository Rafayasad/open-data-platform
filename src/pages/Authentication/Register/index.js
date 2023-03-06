import React, { memo } from "react";
import RegisterComponent from "../../../components/modules/Authentication/Register";
import View from "../../../components/modules/View";

const Register = memo(() => {
  return (
    <View nocontent noupperfooter nomiddlefooter nolowerfooter>
      <RegisterComponent />
    </View>
  )

});

export default Register;
