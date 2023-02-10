import React, { memo, useEffect, useState } from "react";
import { getFacets, getMostViewedDatasets, getPlatformInsights, getRecentsDatasets } from "../../axios/api";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import Images from "../../components/modules/Home/Images";
import Main from "../../components/modules/Home/Main";
import PlatformInsights from "../../components/modules/Home/PlatformInsights";
import Topics from "../../components/modules/Home/Topics";
import Navbar from '../../components/modules/Navbar';

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

const Home = memo(() => {

    const [loading, setLoading] = useState(false)

    const [platformInsights, setPlatformInsights] = useState();
    const [mostViewedDatasets, setMostViewedDatasets] = useState();
    const [recentsDatasets, setRecentsDatasets] = useState();
    const [topics, setTopics] = useState();

    useEffect(() => {
        getPlatformInsights(setPlatformInsights, setLoading)
        getMostViewedDatasets(setMostViewedDatasets, setLoading)
        getRecentsDatasets(setRecentsDatasets, setLoading)
        getFacets("theme", setTopics)
    }, [])

    return (
        <>
            <Navbar />
            <Main />
            <Topics data={topics} />
            <Images />
            <Cards title="Most Viewed Datasets" backgroundColor={'black'} data={mostViewedDatasets} />
            <Cards title="Recently Added Datasets" backgroundColor={'black'} data={recentsDatasets} />
            <PlatformInsights data={platformInsights} />
            <UpperFooter title="Get more from Abu Dhabi Data" button="Register Now" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Home;