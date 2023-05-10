import React, { memo, useEffect, useState } from "react";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import { setFilter } from "../../redux/reducers/Facets";
import { useDispatch } from "react-redux";
import { isDuplicates } from "../../utils/generic";
import { Container } from "react-bootstrap";

const Home = memo(() => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { state } = useLocation();

    console.log("statehome", state);

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
    const files = useSelector((state) => state.facets.file_Formats);

    const data = [
        {
            title: t("publisher"),
            tags: i18n.language === locales.AR ? publishers && isDuplicates(publishers?.ar) : publishers && publishers.en
        },
        {
            title: t("topics"),
            tags: i18n.language === locales.AR ? topics && topics.ar : topics && topics.en
        },
        {
            title: t("tags"),
            tags: i18n.language === locales.AR ? tags && tags.ar : tags && tags.en
        },
        {
            title: t("fileFormat"),
            data: files
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

    const onClickButton = useCallback((title) => {
        dispatch(setFilter());
        if (title === "mostvieweddatasets") {
            navigate(`${routes.DATASET}?id=most_viewed_datasets`)
        } else {
            navigate(`${routes.DATASET}`)
        }
    });

    const onApplyFilter = useCallback((filters) => { navigate(routes.DATASET, { state: { listItem: filters } }) })

    return (
        // <div style={{ maxWidth: "1800px", margin: "auto" }}>
        <View sticky footerTitle={t("GetMore")} footerButton={t("registerNow")} >
            <Main filterData={data} onSearch={onSearch} onClickExplore={() => topicsDiv.scrollIntoView()} onApplyFilter={onApplyFilter} />
            <div id='topics' className="m-0 p-0">
                <Topics onClickViewless={() => topicsDiv.scrollIntoView()} onClickList={onClickList}
                    data={i18n.language === locales.AR ? topics && topics.ar : topics && topics.en}
                />
            </div>
            <Images />
            <Cards textSize={"fs-sm-md"} dropdownWidth={"55%"} hoverable="primary" title={t("mostViewedDatasets")} backgroundColor={colors.black} data={mostViewedDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={() => onClickButton("mostvieweddatasets")} padding='card-padding-md'/>
            <Cards textSize={"fs-sm-md"} dropdownWidth={"55%"} hoverable="primary" title={t("recentlyAddedDatasets")} backgroundColor={colors.black} data={recentsDatasets?.slice(0, 3)} onClick={onClickCard} onClickViewAll={() => onClickButton()} padding='card-padding-md' />
            <PlatformInsights data={platformInsights} />
        </View>
        // </div>
    )
})

export default Home;