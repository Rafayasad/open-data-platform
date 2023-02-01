import React, { memo } from "react";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Dataset/Main";
import UpperFooter from '../../components/modules/Footer/UpperFooter';
import MiddleFooter from '../../components/modules/Footer/MiddleFooter';
import LowerFooter from '../../components/modules/Footer/LowerFooter';
import DatasetList from "../../components/modules/Dataset/DatasetList";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Telecommunication Regulatory Authority"
    }
]

const Dataset = memo(() => {
    return (
        <>
            <Main />
            <Cards title="Featured datasets" backgroundColor={'white'} data={data} />
            <DatasetList />
            <UpperFooter title="Get more from Abu Dhabi Data" />
            {/* <MiddleFooter /> */}
            <LowerFooter />
        </>
    )
})

export default Dataset;