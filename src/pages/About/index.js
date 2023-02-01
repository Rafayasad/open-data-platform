import React, { memo } from "react";
import Main from "../../components/modules/About/Main";
import Rows from "../../components/modules/About/Rows";

const About = memo(() => {
    return (
        <>
            <Main />
            <Rows />
            <Rows />
        </>
    )
})

export default About;