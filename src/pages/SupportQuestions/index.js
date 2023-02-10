import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from '../../components/modules/Navbar';
import QuestionList from "../../components/modules/Support/QuestionList";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import { getPopularQuestions } from "../../axios/api";
import { routes } from "../../router/helper";

const SupportQuestions = memo(() => {

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
                <QuestionList title={"Getting Started"} data={questions} onClick={onClickQuestion} />
            </div>
            <UpperFooter title="Still need help?" description="Send us a message using the contact form and someone from the team will get back to you." button="Contact us" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default SupportQuestions; 