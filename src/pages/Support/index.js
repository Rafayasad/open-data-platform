import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Support/Main";
import Navbar from '../../components/modules/Navbar';
import QuestionList from "../../components/modules/Support/QuestionList";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import { getFaqsCategory, getPopularQuestions } from "../../axios/api";
import { routes } from "../../router/helper";

const Support = memo(() => {

    const navigate = useNavigate()

    const [categories, setCategories] = useState();
    const [questions, setQuestions] = useState();

    useEffect(() => {
        getFaqsCategory(setCategories)
        getPopularQuestions(setQuestions)
    }, [])

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
            <Cards type='image-inner-text' data={categories && categories.en} onClick={onClickCard} />
            <QuestionList title={"Popular Questions"} data={questions} onClick={onClickQuestion} />
            <UpperFooter title="Still need help?" description="Send us a message using the contact form and someone from the team will get back to you." button="Contact us" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Support; 