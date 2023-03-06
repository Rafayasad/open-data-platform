import { memo } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReactRecaptcha = memo((props) => {

    const { callBack } = props;

    function onChange(value) {
        callBack(value);
    }

    return (
        <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
            type="image"
            size="compact"
        // badge="inline"
        />
    )
})

export default ReactRecaptcha;