import React, { memo, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDatasetById, getSimilarDatasets } from "../../axios/api";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/DatasetDetail/Main";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";

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
        <>
            <Navbar theme="dark" />
            <div className="my-5 py-5">
                <Main data={dataset} />
                <Cards title="Similar Datasets" backgroundColor={colors.white} data={similarDataset} />
            </div>
            <LowerFooter />
        </>
    )
});

export default DatasetDetail;