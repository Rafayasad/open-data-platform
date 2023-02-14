import React, { memo, useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";

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

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)

    const [platformInsights, setPlatformInsights] = useState();
    const [mostViewedDatasets, setMostViewedDatasets] = useState();
    const [recentsDatasets, setRecentsDatasets] = useState();
    const [topics, setTopics] = useState();

    useEffect(() => {
        getPlatformInsights(setPlatformInsights, setLoading)
        getMostViewedDatasets(setMostViewedDatasets, setLoading)
        getRecentsDatasets(setRecentsDatasets, setLoading)
        getFacets("theme", "themelear", setTopics)
    }, [])

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) }, []);

    return (
        <>
            <Navbar />
            <Main />
            <Topics data={topics.en} />
            <Images />
            <Cards title="Most Viewed Datasets" backgroundColor={colors.black} data={mostViewedDatasets} onClick={onClickCard} />
            <Cards title="Recently Added Datasets" backgroundColor={colors.black} data={recentsDatasets} onClick={onClickCard} />
            <PlatformInsights data={platformInsights} />
            <UpperFooter title="Get more from Abu Dhabi Data" button="Register Now" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Home;