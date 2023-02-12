import React, { memo, useEffect, useState } from "react";
import { getAboutUs } from "../../axios/api";
import AdLogo from "../../components/modules/About/AdLogo";
import Main from "../../components/modules/About/Main";
import Rows from "../../components/modules/About/Rows";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";
import { colors } from "../../utils/colors";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Telecommunication Regulatory Authority"
    }
]

const About = memo(() => {

    const [aboutus, setAboutus] = useState();

    useEffect(() => {
        getAboutUs(setAboutus);
    }, [])

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 py-5">
                <Main data={aboutus} />
            </div>
            <Cards backgroundColor={colors.white} title="Success Stories" data={data} />
            <AdLogo />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default About;