import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Support/Main";
import Navbar from '../../components/modules/Navbar';
import QuestionList from "../../components/modules/Support/QuestionList";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import { routes } from "../../router/helper";
import { locales } from "../../i18n/helper";

const Support = memo(() => {

    const { t, i18n } = useTranslation()

    const navigate = useNavigate()

    const categories = useSelector(state => state.support.categories)
    const questions = useSelector(state => state.support.questions)

    const onClickCard = useCallback((id) => {
        navigate(`${routes.SUPPORT_QUESTIONS}?id=${id}`, { state: { backURL: routes.SUPPORT } })
    }, []);

    const onClickQuestion = useCallback((id) => {
        navigate(`${routes.SUPPORT_QUESTIONS_DETAIL}?id=${id}`, { state: { backURL: routes.SUPPORT } })
    }, []);

    return (
        <>
            <Navbar theme='dark' />
            <Main />
            <Cards type='image-inner-text' data={i18n.language === locales.AR ? categories && categories.ar : categories && categories.en} onClick={onClickCard} />
            <QuestionList title={t("popularQues")} data={questions} onClick={onClickQuestion} />
            <UpperFooter title={t("stillNeedHelp")} description={t("footerPartText")} button={t("contactUs")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Support; 