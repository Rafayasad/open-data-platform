import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Support/Main";
import QuestionList from "../../components/modules/Support/QuestionList";
import { routes } from "../../router/helper";
import { locales } from "../../i18n/helper";
import View from "../../components/modules/View";

const Support = memo(() => {

    const { t, i18n } = useTranslation()

    const navigate = useNavigate()

    const categories = useSelector(state => state.support.categories)
    const questions = useSelector(state => state.support.questions)

    const onClickCard = useCallback((id, name) => {
        navigate(`${routes.SUPPORT_QUESTIONS}?id=${id}`, { state: { backURL: routes.SUPPORT, name } })
    }, []);

    const onClickQuestion = useCallback((id) => {
        navigate(`${routes.SUPPORT_QUESTIONS_DETAIL}?id=${id}`, { state: { backURL: routes.SUPPORT } })
    }, []);

    console.log("CAT", categories);

    return (
        <View theme="dark" footerTitle={t("stillNeedHelp")} footerDescription={t("footerPartText")} footerButton={t("contactUs")}>
            <Main />
            <Cards type='image-inner-text' data={categories} onClick={onClickCard} />
            <QuestionList title={t("popularQues")} data={questions} onClick={onClickQuestion} />
        </View>

    )
});

export default Support; 