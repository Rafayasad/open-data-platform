import React, { memo, useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
import { locales } from "../../i18n/helper";

const Home = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false)
    const [scrolling, setScrolling] = useState();

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
    const onSearch = useCallback((value) => { navigate(routes.DATASET, { state: { search: value } }) }, []);

    return (
        <>
            <Navbar sticky />
            <Main onSearch={onSearch} />
            <Topics data={i18n.language === locales.AR ? topics && topics.ar : topics && topics.en} />
            <Images />
            <Cards title={t("mostViewedDatasets")} backgroundColor={colors.black} data={mostViewedDatasets} onClick={onClickCard} />
            <Cards title={t("recentlyAddedDatasets")} backgroundColor={colors.black} data={recentsDatasets} onClick={onClickCard} />
            <PlatformInsights data={platformInsights} />
            <UpperFooter title={t("GetMore")} button={t("registerNow")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Home;