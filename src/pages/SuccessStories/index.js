import React, { memo, useCallback, useState } from "react";
import Cards from "../../components/modules/Cards";
import Header from "../../components/modules/Cards/Header";
import { colors } from "../../utils/colors";
import DemiImage from "../../assets/images/recover-pass-Image.png";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";
import Pagination from "../../components/elements/Pagination";

const data = [
    {
        image: DemiImage,
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    },
    {
        image: DemiImage,
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Published on 27 August 2022  ·  7-minute read",
        tags: ['Education', 'Education', 'Education']
    }
]

const SuccessStories = memo(() => {

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Header title="Success stories" nobutton backgroundColor={colors.white} />
                <Cards type="story-cards" data={data} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                onChange={onChangePage}
            />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default SuccessStories;