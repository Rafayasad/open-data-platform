import React, { memo, useEffect, useState } from "react";
import { getInsightsReport } from "../../../axios/api";
import Header from "../../../components/modules/Cards/Header";
import LowerFooter from "../../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../../components/modules/Footer/MiddleFooter";
import Navbar from "../../../components/modules/Navbar";
import Main from "../../../components/modules/Reports/Insights/Main";
import { colors } from "../../../utils/colors";

const Insights = memo(() => {

    const [insights, setInsights] = useState();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInsightsReport(setInsights, {}, setLoading)
    }, [])

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Header title="Insights Reports" nobutton backgroundColor={colors.white} />
                <Main data={insights} />
            </div>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
});

export default Insights;