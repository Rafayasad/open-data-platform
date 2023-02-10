import React, { memo, useRef} from "react";
import Modal from "../../../components/elements/Modal/index";
import AuthBackground1 from "../../../assets/images/Auth-Background-1.png";
import Navbar from '../../../components/modules/Navbar'
import useIsFocused from "../../../utils/hooks/useIsFocused";

const PrivacyPolicy = memo(() => {

    const ref1 = useRef(null);

    return (
        <>
            <div ref={ref1} className="d-none d-lg-block" style={{ height: "100vh", width: "100vw", backgroundImage: `url(${AuthBackground1})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }}>
                <Navbar />
            </div>

            <div className="d-block d-lg-none" style={{ height: "100vh", width: "100vw" }}>
                <Navbar />
            </div>

            <Modal backdrop={useIsFocused(ref1)} heading="Terms and conditions" size="lg" />
        </>
    )
})

export default PrivacyPolicy;