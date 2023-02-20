import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AdLogo from "../../components/modules/About/AdLogo";
import Main from "../../components/modules/About/Main";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";


const About = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const aboutus = useSelector(state => state.about.aboutus);
    const stories = useSelector(state => state.stories.stories);

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) }, []);

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Main data={aboutus} />
            </div>
            <Cards backgroundColor={colors.white} title={t("successStories")} data={stories} size="md" hoverable="primary" onClick={onClickCard} />
            <AdLogo />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default About;