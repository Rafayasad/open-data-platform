import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { getAboutUs, getSuccessStories } from "../../axios/api";
import AdLogo from "../../components/modules/About/AdLogo";
import Main from "../../components/modules/About/Main";
import Rows from "../../components/modules/About/Rows";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";
import { routes } from "../../router/helper";
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

    const { t } = useTranslation()

    const navigate = useNavigate();

    const [aboutus, setAboutus] = useState();
    const [stories, setStories] = useState();

    useEffect(() => {
        getAboutUs(setAboutus);
        getSuccessStories(setStories);
    }, [])

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) });
    const onClickButton = useCallback(() => { navigate(routes.SUCCESS_STOIRES) });

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Main data={aboutus} />
            </div>
            <Cards backgroundColor={colors.white} title={t("successStories")} data={stories} size="md" hoverable="primary" onClick={onClickCard} onClickViewAll={onClickButton} />
            <AdLogo />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default About;