import { memo, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ReactRecaptcha = memo((props) => {

    const { callBack } = props;

    const captchaRef = useRef(null)

    function onChange(value) {
        console.log("RECAPTCHA", value);
        callBack(value);
    }

    return (
        <ReCAPTCHA
            sitekey={"6LcJewwmAAAAANiffp7yErck1xV0eRipjW7xFQsM"}
            onChange={onChange}
            ref={captchaRef}
            type="image"
            size="compact"
        // badge="inline"
        />
    )
})

export default ReactRecaptcha;