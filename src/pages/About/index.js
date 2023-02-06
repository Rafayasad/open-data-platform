import React, { memo } from "react";
import Main from "../../components/modules/About/Main";
import Rows from "../../components/modules/About/Rows";
import Navbar from "../../components/modules/Navbar";

const About = memo(() => {
    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 py-5"> 
                <Main />
                <Rows />
                <Rows />
            </div>
        </>
    )
})

export default About;