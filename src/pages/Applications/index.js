import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllApplications } from "../../axios/api";
import Pagination from "../../components/elements/Pagination";
import Main from "../../components/modules/Applications/Main";
import Cards from "../../components/modules/Cards";
import Navbar from '../../components/modules/Navbar';
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from '../../components/modules/Footer/LowerFooter';
import { useSelector } from "react-redux";
import View from "../../components/modules/View";

const Applications = memo(() => {

    const { t } = useTranslation()
    const applications = useSelector(state => state.application.applications)

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    const onClickCard = useCallback((id) => {

        if (id) {

            let app = applications.find(item => item.id === id)

            window.open(app.applicationURL, '_blank')

        }

    })

    return (
        <View theme="dark" footerTitle={t("GetMore")} footerButton={t("registerNow")}>
            <div className="my-5 pt-5">
                <Main />
                <Cards type="image-outer-text" data={applications} onClick={onClickCard} />
            </div>
        </View>
    )
})

export default Applications;