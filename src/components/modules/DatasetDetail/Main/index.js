import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../utils/colors";
import { locales } from '../../../../i18n/helper';
import Tabs from "../../Tabs";
import DataCard from "../DataCard";
import SwaggerUI from "../../SwaggerUI";
import DataHeader from "../DataHeader";
import Shimmer from '../../../elements/Shimmer';

const Main = memo((props) => {

    const { data, url } = props;

    console.log("Tim Tima 2", url)

    const { t, i18n } = useTranslation();

    let option = { dateStyle: 'long' };

    let e = [
        {
            title: t("about"),
            detail: data ? (
                i18n.language === locales.AR ? data.description_ar : data.description
            ) : (
                <>
                    <Shimmer rounded='xs' className={"my-1"} />
                    <Shimmer rounded='xs' className={"my-1"} />
                    <Shimmer rounded='xs' width="70%" className={"my-1"} />
                </>
            )
        },
        {
            title: t("managedBy"),
            detail: data ? (
                i18n.language === locales.AR ? data.publisher_ar : data.publisher
            ) : <Shimmer rounded='xs' width="70%" className={"my-1"} />
        },
        {
            title: t("frequency"),
            detail: data ? (
                i18n.language === locales.AR ? data.frequency_ar : data.frequency
            ) : <Shimmer rounded='xs' width="70%" className={"my-1"} />
        },
        {
            title: t("accessLevel"),
            detail: data ? (
                i18n.language === locales.AR ? data.access_level_ar : data.access_level
            ) : <Shimmer rounded='xs' width="20%" className={"my-1"} />,
            capitalize: true
        },
        {
            title: "Source(s)",
            detail: "Housing and Development Board"
        },
    ]

    let f = [
        {
            title: t("topics"),
            detail: data && (i18n.language === locales.AR ? (data.topics_ar.length > 0 && !data.topics_ar.includes(" ") ? data.topics_ar : [t("noTopicsFound")]) : (data.topics.length > 0 && !data.topics.includes(" ") ? data.topics : [t("noTopicsFound")])),
            tags: true
        },
        {
            title: t("tags"),
            detail: data && (i18n.language === locales.AR ? (data.tags_ar.length > 0 && !data.tags_ar.includes(" ") ? data.tags_ar : [t("noTagsFound")]) : (data.tags.length > 0 && !data.tags.includes(" ") ? data.tags : [t("noTagsFound")])),
            tags: true,
            theme: 'light'
        },
        {
            title: t("createdAt"),
            detail: data ? (
                new Date(data.created).toLocaleDateString("en-US", option)
            ) : <Shimmer rounded='xs' width="40%" className={"my-1"} />
        },
        {
            title: t("lastUpdated"),
            detail: data ? (
                new Date(data.modified).toLocaleDateString("en-US", option)
            ) : <Shimmer rounded='xs' width="40%" className={"my-1"} />
        },
        {
            title: t("sourceURL"),
            detail: "https://developers.data.gov.sg/data-gov-sg-apis/apis/get/transport/carpark-availability",
            color: colors.purple,
            underline: true
        },
        {
            title: t("license"),
            detail: data ? "Abu Dhabi Government Open Data License" : <Shimmer rounded='xs' width="70%" className={"my-1"} />,
            color: colors.purple,
            underline: true,
            onClick: () => data && window.open(data.license, '_blank')
        }
    ]

    console.log("data ID==>", data);

    let tabs = [
        {
            name: t("overview"),
            component: <DataCard data={e} />
        },
        {
            name: t("APIDocumentation"),
            component: <SwaggerUI url={`${process.env.REACT_APP_BASE_URL}/api/1/metastore/schemas/dataset/items/${data && data.id}/docs`} />
        }
    ]

    return (
        <Container fluid>
            <DataHeader
                resources={data && data.resources}
                title={i18n.language === locales.AR ? data && data.title_ar : data && data.title}
                url={url}
            />
            <Tabs data={tabs} staticComponentOnRight={<DataCard data={f} />} />
        </Container>
    )
});

export default Main;