import React, { memo } from "react";
import RecoverPassComponent from "../../../components/modules/Authentication/RecoverPassword";
import View from "../../../components/modules/View";

const RecoverPassword = memo(() => {
  return (
    <View nocontent>
      <RecoverPassComponent />
    </View>

  )
});

export default RecoverPassword;
