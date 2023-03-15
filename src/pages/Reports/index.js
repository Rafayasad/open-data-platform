import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router";
import Cards from "../../components/modules/Cards";
import View from "../../components/modules/View";
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
            <View theme={"dark"} noupperfooter>
                <div className="my-5 pt-5">
                    <Cards title="Reports" notitlebutton backgroundColor={colors.white} type='image-inner-text' data={data} onClick={onClickCard} />
                </div>
            </View>
        </>
    )
});

export default Reports;