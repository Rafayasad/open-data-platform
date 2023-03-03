import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import QuestionList from "../../components/modules/Support/QuestionList";
import { getPopularQuestions } from "../../axios/api";
import { routes } from "../../router/helper";
import BreadCrumb from "../../components/elements/BreadCrumb";
import View from "../../components/modules/View";

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
        <View theme="dark" footerTitle={t("stillNeedHelp")} footerDescription={t("footerPartText")} footerButton={t("contactUs")}>
            <div className="mt-5 pt-5">
                <div className="px-4">
                    <BreadCrumb items={[t("supports")]} />
                </div>
                <QuestionList title={t("gettingStarted")} data={questions} onClick={onClickQuestion} />
            </div>
        </View>

    )
});

export default SupportQuestions; 