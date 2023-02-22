import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../components/modules/Navbar';
import QuestionList from "../../components/modules/Support/QuestionList";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import { getPopularQuestions } from "../../axios/api";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/elements/BreadCrumb";

const SupportQuestions = memo(() => {

    const { t } = useTranslation()

    let navigate = useNavigate();
    const { search, state } = useLocation();

    const urlParams = new URLSearchParams(search);

    const id = urlParams.get('id');
    const url = state && state.backURL ? state.backURL : routes.SUPPORT

    const [questions, setQuestions] = useState();

    useEffect(() => {

        if (!id) return navigate(url, { replace: true })

        getPopularQuestions(setQuestions)

    }, [])

    const onClickQuestion = useCallback((id) => {
        navigate(`${routes.SUPPORT_QUESTIONS_DETAIL}?id=${id}`, { state: { backURL: routes.SUPPORT } })
    }, []);

    return (
        <>
            <Navbar theme='dark' />
            <div className="mt-5 pt-5">
                <div className="px-4">
                    <BreadCrumb items={["Support"]} />
                </div>
                <QuestionList title={t("gettingStarted")} data={questions} onClick={onClickQuestion} />
            </div>
            <UpperFooter title={t("stillNeedHelp")} description={t("footerPartText")} button={t("contactUs")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default SupportQuestions; 