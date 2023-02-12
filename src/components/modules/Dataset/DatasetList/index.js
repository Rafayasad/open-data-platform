import React, { memo, useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAllDatasets } from "../../../../axios/api";
import { routes } from "../../../../router/helper";
import { colors } from "../../../../utils/colors";
import Card from "../../../elements/Card";
import Pagination from "../../../elements/Pagination";
import Shimmer from "../../../elements/Shimmer";
import Header from "../../Cards/Header";
import Loader from "../../Loader";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Social', 'Enviornment']
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022 Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Enviornment', 'Social']
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Telecommunication Regulatory Authority",
        tags: ['Social', 'Enviornment']
    },
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
        tags: ['Social', 'Police',]
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022 Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention",
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Telecommunication Regulatory Authority",
        tags: ['Social', 'Enviornment']
    }
]

const DatasetList = memo((props) => {

    const { onClick } = props

    let navigate = useNavigate();

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    const [datasets, setDatasets] = useState();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        getAllDatasets(setDatasets, setTotalCount, currentPage, rowsPerPage)
    }, [])

    return (
        <Container fluid>
            <hr className="mt-5" style={{ color: '#CFCFCF', borderWidth: 2 }} />
            <Header title={`${totalCount} Datasets`} backgroundColor={colors.white} />
            {
                datasets && datasets.length > 0 ? datasets.map((item, index) => (
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
                )) : <Loader type="full-width-max" />
            }
        </Container>
    )
});

export default DatasetList;