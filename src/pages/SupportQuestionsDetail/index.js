import React, { memo, useEffect, useState } from "react";
import Navbar from '../../components/modules/Navbar';
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import { getQuestionById } from "../../axios/api";
import Main from "../../components/modules/SupportQuestionsDetail/Main";
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";

const SupportQuestionsDetail = memo(() => {

    const { t } = useTranslation()

    const navigate = useNavigate();
    const { search, state } = useLocation();

    const urlParams = new URLSearchParams(search);

    const id = urlParams.get('id');
    const url = state && state.backURL ? state.backURL : routes.SUPPORT

    const [details, setDetails] = useState();

    useEffect(() => {

        if (!id) return navigate(url, { replace: true })

        getQuestionById(id, setDetails)

    }, [])

    return (
        <>
            <Navbar theme='dark' />
            <Main title={details && details.title} description={details && details.description} />
            <UpperFooter title={t("stillNeedHelp")} description={t("footerPartText")} button={t("contactus")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default SupportQuestionsDetail; 