import React , { memo } from "react";
import Modal from "../../../components/elements/Modal/index";
import AuthBackground1 from "../../../assets/images/Auth-Background-1.png";

const PrivacyPolicy = memo(()=>{
    return(
        <div
        style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${AuthBackground1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100vw 100vh",
          }}
        >
            <Modal heading="Terms and conditions" size="lg" />
        </div>
    )
})

export default PrivacyPolicy;