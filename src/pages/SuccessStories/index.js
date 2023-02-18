import React, { memo, useCallback, useEffect, useState } from "react";
import Cards from "../../components/modules/Cards";
import Header from "../../components/modules/Cards/Header";
import { colors } from "../../utils/colors";
import DemiImage from "../../assets/images/recover-pass-Image.png";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";
import Pagination from "../../components/elements/Pagination";
import { getSuccessStories } from "../../axios/api";
import { useTranslation } from "react-i18next";
import { routes } from "../../router/helper";
import { useNavigate } from "react-router-dom";

const data = [
    {
        image: DemiImage,
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    }
]

const SuccessStories = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const [stories, setStories] = useState();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getSuccessStories(setStories);
    }, [])

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) }, []);

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Header title={t("successStories")} nobutton backgroundColor={colors.white} />
                <Cards type="story-cards" data={stories} onClick={onClickCard} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                onChange={onChangePage}
            />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default SuccessStories;