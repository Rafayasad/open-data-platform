import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../../axios/api";
import ResetPassComponent from "../../../components/modules/Authentication/ResetPassword";
import View from "../../../components/modules/View";
import { routes } from "../../../router/helper";

const ResetPassword = memo(() => {

  const navigate = useNavigate();
  const { search } = useLocation();

  const urlParams = new URLSearchParams(search);

  const otp = urlParams.get('xjskd');

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [policyCheck, setPolicyCheck] = useState(false)

  useEffect(() => {
    if (!otp) return navigate(routes.RECOVER, { replace: true })
  }, [])

  const onClickButton = useCallback(() => {

    if (email === '' || password === '' || rePassword === '') {
      toast("Please fill all the fields")
    } else if (rePassword !== password) {
      toast("Both passwords doesn't match")
    } else if (!policyCheck) {
      toast("Please check policy")
    } else {
      resetPassword(navigate, routes.LOGIN, setLoading, { email, password, otp })
    }

  })

  return (
    <View nocontent noupperfooter nomiddlefooter nolowerfooter>
      <ResetPassComponent
        setEmail={setEmail}
        setPassword={setPassword}
        setRePassword={setRePassword}
        setPolicyCheck={setPolicyCheck}
        onClickButton={onClickButton}
      />
    </View>
  )
});

export default ResetPassword;
