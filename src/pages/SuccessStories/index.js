import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cards from "../../components/modules/Cards";
import Header from "../../components/modules/Cards/Header";
import { colors } from "../../utils/colors";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";
import Pagination from "../../components/elements/Pagination";
import { useTranslation } from "react-i18next";
import { routes } from "../../router/helper";
import BreadCrumb from "../../components/elements/BreadCrumb";

const SuccessStories = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const stories = useSelector(state => state.stories.stories);

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) }, []);

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <div className="px-4">
                    <BreadCrumb items={["About us"]} />
                </div>
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