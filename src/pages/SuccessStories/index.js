import React, { memo, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cards from "../../components/modules/Cards";
import Header from "../../components/modules/Cards/Header";
import { colors } from "../../utils/colors";
import Pagination from "../../components/elements/Pagination";
import { useTranslation } from "react-i18next";
import { routes } from "../../router/helper";
import BreadCrumb from "../../components/elements/BreadCrumb";
import View from "../../components/modules/View";
import i18n from "../../i18n/i18n";
import { locales } from "../../i18n/helper";
import { getStoriesTags } from "../../axios/api";

const SuccessStories = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const stories = useSelector(state => state.stories.stories);
    const topics = useSelector((state) => state.facets.topics);
    const storiesTags = useSelector((state) => state.facets.storiesTags);


    console.log("topics", storiesTags);

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [isYearSelected, setIsYearSelected] = useState();
    const [isSortBySelected, setIsSortBySelected] = useState();

    const yearChecked = useCallback((check) => {
        setIsYearSelected(check);
    }, [isYearSelected]);

    const sortByChecked = useCallback((check) => {
        setIsSortBySelected(check);
    }, [isSortBySelected]);

    const data = [
        {
            title: t("categories"),
            tags: i18n.language === locales.AR ? storiesTags && storiesTags.tags_ar : storiesTags && storiesTags.tags
        },
        {
            title: t("year"),
            data: [
                {
                    value: '2020',
                    onclick: yearChecked,
                    selectedValue: isYearSelected
                },
                {
                    value: '2021',
                    onclick: yearChecked,
                    selectedValue: isYearSelected
                },
                {
                    value: '2022',
                    onclick: yearChecked,
                    selectedValue: isYearSelected
                },
                {
                    value: '2023',
                    onclick: yearChecked,
                    selectedValue: isYearSelected
                }
            ]
        },
        {
            title: t("sortBy"),
            data: [
                {
                    value: t('recent'),
                    onclick: sortByChecked,
                    selectedValue: isSortBySelected
                },
                {
                    value: t('popular'),
                    onclick: sortByChecked,
                    selectedValue: isSortBySelected
                }
            ]
        }
    ]

    console.log("daad", data);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) }, []);

    return (
        <View theme="dark" noupperfooter>
            <div className="my-5 pt-5">
                <div className="px-4 pt-5">
                    <BreadCrumb items={[t("aboutus")]} />
                </div>
                <div className="px-2">
                    <Header filterData={data} title={t("successStories")} nobutton backgroundColor={colors.white} filterbutton />
                </div>
                <Cards type="story-cards" data={stories} onClick={onClickCard} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                onChange={onChangePage}
            />
        </View>

    )
})

export default SuccessStories;