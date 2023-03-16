import React, { memo, useEffect, useState } from "react";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useSelector } from "react-redux";
import View from "../../components/modules/View";

const Home = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const topicsDiv = document.getElementById("topics");

    const [loading, setLoading] = useState(false)

    const [platformInsights, setPlatformInsights] = useState();
    const [mostViewedDatasets, setMostViewedDatasets] = useState();
    const [recentsDatasets, setRecentsDatasets] = useState();

    const topics = useSelector((state) => state.facets.topics);

    useEffect(() => {
        getPlatformInsights(setPlatformInsights, setLoading)
        getMostViewedDatasets(setMostViewedDatasets, setLoading)
        getRecentsDatasets(setRecentsDatasets, setLoading)
    }, [])

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) });
    const onSearch = useCallback((value) => { value != "" && navigate(routes.DATASET, { state: { search: value } }) });
    const onClickList = useCallback((item) => { 
        navigate(routes.DATASET, { state: { listItem: [item] } })
     });
    const onClickButton = useCallback(() => { navigate(routes.DATASET) });

    const onApplyFilter = useCallback((filters) => { navigate(routes.DATASET, { state: { listItem: filters } }) })

    return (
        <View sticky footerTitle={t("GetMore")} footerButton={t("registerNow")} >
            <Main onSearch={onSearch} onClickExplore={() => topicsDiv.scrollIntoView()} onApplyFilter={onApplyFilter} />
            <div id='topics'>
                <Topics onClickViewless={() => topicsDiv.scrollIntoView()} onClickList={onClickList} data={i18n.language === locales.AR ? topics && topics.ar : topics && topics.en} />
            </div>
            <Images />
            <Cards title={t("mostViewedDatasets")} backgroundColor={colors.black} data={mostViewedDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={onClickButton} />
            <Cards title={t("recentlyAddedDatasets")} backgroundColor={colors.black} data={recentsDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={onClickButton} />
            <PlatformInsights data={platformInsights} />
        </View>
    )
})

export default Home;