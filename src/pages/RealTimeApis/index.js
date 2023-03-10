import React, { memo } from "react";
import View from "../../components/modules/View";
import { useTranslation } from "react-i18next";
import RealTimeApisHeader from "../../components/modules/RealTimeApis/Main";
import ListCard from "../../components/modules/RealTimeApis/Main/ListCard";
import { useState } from "react";
import { useEffect } from "react";
import { realTimeApis } from "../../axios/api";
import DatasetList from "../../components/modules/Dataset/DatasetList";

const RealTimeApis = memo((props) => {

    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [realTimeApisData, setRealTimeApisData] = useState();

    useEffect(() => {
        realTimeApis(setRealTimeApisData, {
            "municipalityId": 1001
        }, setLoading)
    }, [])



    const data = [
        {
            title: "Internal Gateway",
            description: "Truncated description to provide context in terms of details with 190chars limit with rest of the ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ik...",
            publisher: "Name of the authority",
        },
        {
            title: "Internal Gateway",
            description: "Truncated description to provide context in terms of details with 190chars limit with rest of the ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ik...",
            publisher: "Name of the authority",
        },
        {
            title: "Internal Gateway",
            description: "Truncated description to provide context in terms of details with 190chars limit with rest of the ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ik...",
            publisher: "Name of the authority",
        }
    ]

    return (
        <View theme="dark" footerTitle={t("GetMore")} footerButton={t("registerNow")}>
            <RealTimeApisHeader />
            <DatasetList datasets={data} loading={loading} notags cardSize="xs" noheader />
            {/* <ListCard loading={loading} datalist={data} /> */}
        </View>
    )
})

export default RealTimeApis;