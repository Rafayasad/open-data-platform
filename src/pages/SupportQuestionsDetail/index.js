import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getQuestionById } from "../../axios/api";
import Main from "../../components/modules/SupportQuestionsDetail/Main";
import { routes } from "../../router/helper";
import { locales } from "../../i18n/helper";
import BreadCrumb from "../../components/elements/BreadCrumb";
import View from "../../components/modules/View";

const SupportQuestionsDetail = memo(() => {

    const { t, i18n } = useTranslation()

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
        <View theme='dark' footerTitle={t("stillNeedHelp")} footerDescription={t("footerPartText")} footerButton={t("contactUs")}  >
            <div className="my-5 pt-5">
                <div className="px-4 m-0">
                    <BreadCrumb items={["Support", "Getting Started"]} />
                </div>
                <Main title={i18n.language === locales.AR ? details && details.title_ar : details && details.title} description={i18n.language === locales.AR ? details && details.description_ar : details && details.description} />
            </div>
        </View>
    )
});

export default SupportQuestionsDetail; 