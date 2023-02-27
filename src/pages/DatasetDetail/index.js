import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDatasetById, getSimilarDatasets } from "../../axios/api";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/DatasetDetail/Main";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";
import { useTranslation } from "react-i18next";
import BreadCrumb from "../../components/elements/BreadCrumb";
import View from "../../components/modules/View";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Telecommunication Regulatory Authority"
    }
]

const DatasetDetail = memo(() => {

    const { t } = useTranslation()

    const navigate = useNavigate();
    const { search } = useLocation();

    const urlParams = new URLSearchParams(search);

    const id = urlParams.get('id');

    const [dataset, setDataset] = useState();
    const [similarDataset, setSimilarDataset] = useState();

    useEffect(() => {

        if (!id) return navigate(routes.DATASET, { replace: true });

        getDatasetById(id, setDataset);

    }, [])

    useEffect(() => {

        if (dataset) {
            getSimilarDatasets(dataset.topics[0], setSimilarDataset)
        }

    }, [dataset])

    return (
        <View theme="dark" sticky>
            <div className="my-5 py-5">
                <div className="px-4">
                    <BreadCrumb items={["Datasets", "Technology"]} />
                </div>
                <Main data={dataset} />
                <Cards title={t("similarDatasets")} backgroundColor={colors.white} data={similarDataset} />
            </div>
        </View>

    )
});

export default DatasetDetail;