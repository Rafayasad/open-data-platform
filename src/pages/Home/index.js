import React, { memo, useEffect, useState } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getFacets, getMostViewedDatasets, getPlatformInsights, getRecentsDatasets } from "../../axios/api";
import Cards from "../../components/modules/Cards";
import Images from "../../components/modules/Home/Images";
import Main from "../../components/modules/Home/Main";
import PlatformInsights from "../../components/modules/Home/PlatformInsights";
import Topics from "../../components/modules/Home/Topics";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";
import { locales } from "../../i18n/helper";
import View from "../../components/modules/View";

const Home = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const topicsDiv = document.getElementById("topics");

    const [loading, setLoading] = useState(false)

    const [platformInsights, setPlatformInsights] = useState();
    const [mostViewedDatasets, setMostViewedDatasets] = useState();
    const [recentsDatasets, setRecentsDatasets] = useState();

    const [perPage, setPerPage] = useState(3);
    const [pageNumber, setPageNumber] = useState(1);
    const [count, setCount] = useState();
    const [search, setSearch] = useState();

    const topics = useSelector((state) => state.facets.topics);
    const publishers = useSelector((state) => state.facets.publishers);
    const tags = useSelector((state) => state.facets.tags);

    const data = [
        {
            title: t("publisher"),
            tags: i18n.language === locales.AR ? publishers && publishers.ar : publishers && publishers.en
        },
        {
            title: t("topics"),
            tags: i18n.language === locales.AR ? topics && topics.ar : topics && topics.en
        },
        {
            title: t("tags"),
            tags: i18n.language === locales.AR ? tags && tags.ar : tags && tags.en
        }
    ]

    useEffect(() => {
        getPlatformInsights(setPlatformInsights, setLoading)
        getMostViewedDatasets(setMostViewedDatasets, setCount, search, setLoading, perPage, pageNumber)
        getRecentsDatasets(setRecentsDatasets, setLoading)
    }, [])

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) });
    const onSearch = useCallback((value) => { value != "" && navigate(routes.DATASET, { state: { search: value } }) });
    const onClickList = useCallback((item) => {
        navigate(routes.DATASET, { state: { listItem: [item] } })
    });

    const onClickButton = useCallback((title) => { navigate(`${routes.DATASET}${title === "mostvieweddatasets" ? "?id=most_viewed_datasets" : ""}`) });

    const onApplyFilter = useCallback((filters) => { navigate(routes.DATASET, { state: { listItem: filters } }) })

    return (
        <View sticky footerTitle={t("GetMore")} footerButton={t("registerNow")} >
            <Main filterData={data} onSearch={onSearch} onClickExplore={() => topicsDiv.scrollIntoView()} onApplyFilter={onApplyFilter} />
            <div id='topics'>
                <Topics onClickViewless={() => topicsDiv.scrollIntoView()} onClickList={onClickList}
                    data={i18n.language === locales.AR ? topics && topics.ar : topics && topics.en} />
            </div>
            <Images />
            <Cards title={t("mostViewedDatasets")} backgroundColor={colors.black} data={mostViewedDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={() => onClickButton("mostvieweddatasets")} />
            <Cards title={t("recentlyAddedDatasets")} backgroundColor={colors.black} data={recentsDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={() => onClickButton()} />
            <PlatformInsights data={platformInsights} />
        </View>
    )
})

export default Home;