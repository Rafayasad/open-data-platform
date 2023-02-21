import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import Navbar from "../../components/modules/Navbar";
import ReportsFilter from "../../components/modules/Reports/Filter";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";

const data = [
    {
        title: "Insights"
    },
    {
        title: "Datasets"
    },
    {
        title: "Publisher"
    }
]

const Reports = memo(() => {

    const navigate = useNavigate();

    const onClickCard = useCallback(() => navigate(routes.REPORTS_INSIGHTS))

    const [filterOpen, setFilterOpen] = useState(true);

    return (
        <>
            <Navbar theme='dark' />
            <ReportsFilter open={filterOpen} setOpen={setFilterOpen} />
            <div className="my-5 pt-5">
                <Cards title="Reports" backgroundColor={colors.white} type='image-inner-text' data={data} onClick={onClickCard} />
            </div>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Reports;