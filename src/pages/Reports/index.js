import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";

const data = [
    {
        title: "Insights",
        id: routes.REPORTS_INSIGHTS
    },
    {
        title: "Datasets",
        id: routes.REPORTS_DATASETS
    },
    {
        title: "Publisher",
        id: routes.REPORTS_PUBLISHERS
    }
]

const Reports = memo(() => {

    const navigate = useNavigate();

    const onClickCard = useCallback((route) => navigate(route))

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Cards title="Reports" backgroundColor={colors.white} type='image-inner-text' data={data} onClick={onClickCard} />
            </div>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Reports;