import React, { memo, useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getAllDatasets } from "../../../../axios/api";
import { locales, string } from "../../../../i18n/helper";
import { colors } from "../../../../utils/colors";
import Card from "../../../elements/Card";
import Pagination from "../../../elements/Pagination";
import Shimmer from "../../../elements/Shimmer";
import Header from "../../Cards/Header";
import Loader from "../../Loader";
import { useTranslation } from "react-i18next";
import { numberWithCommas } from "../../../../utils/generic";

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
        tags: ['Social', 'Police']
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022 Immunizations by Nationality, Type of Vaccine and Age Group",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group. Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        description: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Telecommunication Regulatory Authority",
        tags: ['Social', 'Enviornment']
    }
]

const DatasetList = memo((props) => {

    const { onClick, datasets, totalCount, currentPage, rowsPerPage, loading, onChangePage, selectedValue, onSelectDropdown } = props

    const { t, i18n } = useTranslation();

    console.log("datatata",datasets);

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered]);
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered]);

    const data = [
        {
            title: string("modified"),
            onClick: onSelectDropdown,
        },
        {
            title: string("title"),
            onClick: onSelectDropdown,
        }
    ]

    return (
        <Container fluid className="px-4">
            <hr className="mt-5" style={{ color: '#CFCFCF', borderWidth: 2 }} />
            <Header
                title={`${numberWithCommas(totalCount)} ${t("datasets")}`}
                backgroundColor={colors.white}
                nobutton
                dropdown={{
                    title: t("sortBy"),
                    options: data,
                    selectedValue
                }}
            />
            {
                !loading ?
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
                                title={i18n.language === locales.AR ? item.title_ar : item.title}
                                publisher={i18n.language === locales.AR ? item.publisher_ar : item.publisher}
                                description={i18n.language === locales.AR ? item.description_ar : item.description}
                                tags={i18n.language === locales.AR ? item.tags_ar : item.tags}
                                resources={i18n.language === locales.AR ? item.resources_ar : item.resources}
                                onClick={() => onClick(item.id)}
                            />
                        </div>
                    ))
                    : <Loader type="full-width-max" />
            }
            <Pagination
                currentPage={currentPage}
                totalCount={Math.ceil(totalCount / rowsPerPage)}
                onChange={onChangePage}
            />
        </Container >
    )
});

export default DatasetList;