import React, { memo, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllDatasets } from "../../../../axios/api";
import { colors } from "../../../../utils/colors";
import Card from "../../../elements/Card";
import Paginations from "../../../elements/Pagination";
import Header from "../../Cards/Header";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Social', 'Enviornment'],
        pageNum: "1"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022 Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Enviornment', 'Social'],
        pageNum: "1"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Telecommunication Regulatory Authority",
        tags: ['Social', 'Enviornment'],
        pageNum: "2"
    },
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Social', 'Police',],
        pageNum: "2"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022 Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        pageNum: "3"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Telecommunication Regulatory Authority",
        tags: ['Social', 'Enviornment'],
        pageNum: "3"
    }
]

const DatasetList = memo((props) => {

    const { onClick } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    const [datasets, setDatasets] = useState();

    const [totalCount, setTotalCount] = useState(10); //just for demi initailization.
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const PaginationHandler = (pageNum) => {
        setCurrentPage(pageNum);
    }

    useEffect(() => {
        getAllDatasets(setDatasets, setTotalCount, currentPage, rowsPerPage)
    }, [])

    return (
        <Container fluid>
            <hr className="mt-5" style={{ color: '#CFCFCF', borderWidth: 2 }} />
            <Header title={`${totalCount} Datasets`} backgroundColor={colors.white} />
            {
                datasets && datasets.length > 0 && datasets.map((item, index) => (
                    <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave}>
                        {
                            index > 0 &&
                            <hr className="m-0" style={{ color: currentHovered == index || currentHovered != null && currentHovered + 1 == index ? 'white' : '#CFCFCF', borderWidth: 2 }} />
                        }
                        <Card
                            size='sm'
                            headingSize='lg'
                            noborder
                            hoverable="light"
                            shortTitle
                            title={item.title}
                            publisher={item.publisher}
                            description={item.description}
                            tags={item.tags}
                            onClick={() => onClick(item.id)}
                        />
                    </div>
                ))
            }
            <Paginations
                currentPage={currentPage}
                totalCount={totalCount}
                rowsPerPage={rowsPerPage}
                onChangePageNumber={PaginationHandler} />
        </Container>
    )
});

export default DatasetList;