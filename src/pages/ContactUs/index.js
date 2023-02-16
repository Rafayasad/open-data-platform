import React, { memo } from "react";
import Main from "../../components/modules/ContactUs/Main";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";

const ContactUs = memo(() => {
    return (
        <>
            <Navbar theme='dark' />
            <Main />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default ContactUs;