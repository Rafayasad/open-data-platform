import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../utils/colors";
import { locales } from '../../../../i18n/helper';
import Tabs from "../../Tabs";
import Header from "../../Cards/Header";
import DataCard from "../DataCard";

const Main = memo((props) => {

    const { data } = props

    const { t, i18n } = useTranslation();

    let option = { dateStyle: 'long' };

    let e = data && [
        {
            title: t("about"),
            detail: i18n.language === locales.AR ? data.description_ar : data.description
        },
        {
            title: t("managedBy"),
            detail: i18n.language === locales.AR ? data.publisher_ar : data.publisher
        },
        {
            title: t("frequency"),
            detail: i18n.language === locales.AR ? data.frequency_ar : data.frequency
        },
        {
            title: t("accessLevel"),
            detail: i18n.language === locales.AR ? data.access_level_ar : data.access_level,
            capitalize: true
        },
        {
            title: "Source(s)",
            detail: "Housing and Development Board"
        },
    ]

    let f = data && [
        {
            title: t("topics"),
            detail: i18n.language === locales.AR ? data.topics_ar : data.topics,
            tags: true
        },
        {
            title: t("tags"),
            detail: ['Ahmed', 'Hassan Ali Chor', 'Daniyal Raza', 'Alishan', 'Nadeem'],
            tags: true
        },
        {
            title: t("createdAt"),
            detail: new Date(data.created).toLocaleDateString("en-US", option)
        },
        {
            title: t("lastUpdated"),
            detail: new Date(data.modified).toLocaleDateString("en-US", option)
        },
        {
            title: t("sourceURL"),
            detail: "https://developers.data.gov.sg/data-gov-sg-apis/apis/get/transport/carpark-availability",
            color: colors.purple,
            underline: true
        },
        {
            title: t("license"),
            detail: "Abu Dhabi Government Open Data License",
            color: colors.purple,
            underline: true,
            onClick: () => window.open(data.license, '_blank')
        }
    ]

    let tabs = [
        {
            name: t("overview"),
            component: data && <DataCard data={e} />
        },
        {
            name: t("APIDocumentation"),
            component: null
        }
    ]

    return (
        <Container fluid>
            <Header size='lg' backgroundColor={colors.white} title={i18n.language === locales.AR ? data && data.title_ar : data && data.title} nobutton />
            <Tabs data={tabs} staticComponentOnRight={data && <DataCard data={f} />} />
        </Container>
    )
});

export default Main;