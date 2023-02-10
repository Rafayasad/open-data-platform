import React, { memo } from "react";
import Cards from "../../components/modules/Cards";
import Main from "../../components/modules/DatasetDetail/Main";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";
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
    return (
        <>
            <Navbar theme="dark" />
            <div className="my-5 py-5">
                <Main />
                <Cards title="Similar Datasets" backgroundColor={colors.white} data={data} />
            </div>
            <LowerFooter />
        </>
    )
});

export default DatasetDetail;