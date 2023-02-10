import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Card from "../../../elements/Card";
import Header from "../../Cards/Header";

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

    // const { data } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    return (
        <Container fluid>
            <hr className="mt-5" style={{ color: 'lightgray', borderWidth: 2 }} />
            <Header title={"3127 Datasets"} backgroundColor={colors.white} nobutton dropdown />
            {
                data.map((item, index) => (
                    <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave}>
                        {
                            index > 0 &&
                            <hr className="m-0" style={{ color: currentHovered == index || currentHovered != null && currentHovered + 1 == index ? 'white' : 'lightgray', borderWidth: 2 }} />
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
                        />
                    </div>
                ))
            }
        </Container>
    )
});

export default DatasetList;