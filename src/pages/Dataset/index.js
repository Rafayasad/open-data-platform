import React, { memo, useCallback, useEffect, useState } from "react";
import Navbar from '../../components/modules/Navbar';
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/Dataset/Main";
import UpperFooter from '../../components/modules/Footer/UpperFooter';
import MiddleFooter from '../../components/modules/Footer/MiddleFooter';
import LowerFooter from '../../components/modules/Footer/LowerFooter';
import DatasetList from "../../components/modules/Dataset/DatasetList";
import { colors } from "../../utils/colors";
import { getRecentsDatasets } from "../../axios/api";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { useTranslation } from "react-i18next";

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

const Dataset = memo(() => {

    const { t } = useTranslation()

    const navigate = useNavigate();

    const [recentsDatasets, setRecentsDatasets] = useState();

    useEffect(() => {
        getRecentsDatasets(setRecentsDatasets)
    }, [])

    const onClickCard = useCallback((id) => { navigate(`${routes.DATASET_DETAIL}?id=${id}`) }, []);

    return (
        <>
            <Navbar theme={'dark'} />
            <Main />
            <Cards title={t("featuredDatasets")} hoverable="primary" backgroundColor={colors.white} data={recentsDatasets} onClick={onClickCard} />
            <DatasetList onClick={onClickCard} />
            <UpperFooter title={t("GetMore")} button={t("registerNow")} />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Dataset;