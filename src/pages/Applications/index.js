import React, { memo, useCallback, useEffect, useState } from "react";
import { getAllApplications } from "../../axios/api";
import Pagination from "../../components/elements/Pagination";
import Main from "../../components/modules/Applications/Main";
import Cards from "../../components/modules/Cards";
import Navbar from '../../components/modules/Navbar';

let data = [
    {
        title: "Urban Fabric Evolution",
        description: "Abu Dhabi island urban fabric evolution paced up in a high growth scenario, where as you can see that the city grew 10 times its original size from 1970. Moreover the building heights in the city climbed from 8 m for the highest building in 1970 to more than 320 m in 2018."
    },
    {
        title: "Abu Dhabi in Motion",
        description: "Abu Dhabi’s evolution has been evident in the way its leaders have planned its growth over the past 50 years. The country has transformed itself from a quiet desert city to a commercial hub - and now under the Abu Dhabi Economic Vision 2030, Abu Dhabi strives to set an example for development."
    },
    {
        title: "Radar Network",
        description: "Welcome to National Center for Meteorology Radar Network where you can find all required information about the to  regional exchange of weather radar data."
    },
    {
        title: "Abu Dhabi in Motion",
        description: "Abu Dhabi’s evolution has been evident in the way its leaders have planned its growth over the past 50 years. The country has transformed itself from a quiet desert city to a commercial hub - and now under the Abu Dhabi Economic Vision 2030, Abu Dhabi strives to set an example for development."
    },
    {
        title: "Radar Network",
        description: "Welcome to National Center for Meteorology Radar Network where you can find all required information about the to  regional exchange of weather radar data."
    }
]

const Applications = memo(() => {

    const [applications, setApplications] = useState();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const onChangePage = useCallback((page) => setCurrentPage(page), [])

    useEffect(() => {
        getAllApplications(setApplications);
    }, [])

    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 py-5">
                <Main />
                <Cards type="image-outer-text" data={applications} />
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={totalCount}
                onChange={onChangePage}
            />
        </>
    )
})

export default Applications;