import React, { memo } from "react";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Support/Main";
import Navbar from '../../components/modules/Navbar';
import QuestionList from "../../components/modules/Support/QuestionList";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";

let data = [
    {
        title: 'Getting Started',
        description: "Citizen access to government data across different sectors to foster innovation."
    },
    {
        title: 'Using Open Data',
        description: "Citizen access to government data across different sectors to foster innovation."
    },
    {
        title: 'Profile and Settings',
        description: "A single platform for all Abu Dhabi Data services accessible only to government employees."
    },
    {
        title: 'Getting Started',
        description: "Citizen access to government data across different sectors to foster innovation."
    },
    {
        title: 'Using Open Data',
        description: "Citizen access to government data across different sectors to foster innovation."
    },
    {
        title: 'Profile and Settings',
        description: "A single platform for all Abu Dhabi Data services accessible only to government employees."
    }
]

const Support = memo(() => {
    return (
        <>
            <Navbar theme='dark' />
            <Main />
            <Cards type='image-inner-text' data={data} />
            <QuestionList title={"Popular Questions"} />
            <UpperFooter title="Still need help?" />
            <LowerFooter />
        </>
    )
});

export default Support;