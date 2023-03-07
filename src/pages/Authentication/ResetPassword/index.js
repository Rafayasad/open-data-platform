import React, { memo } from "react";
import ResetPassComponent from "../../../components/modules/Authentication/ResetPassword";
import View from "../../../components/modules/View";

const ResetPassword = memo(() => {
  return (
    <View nocontent noupperfooter nomiddlefooter nolowerfooter>
      <ResetPassComponent />
    </View>
  )
});

export default ResetPassword;
