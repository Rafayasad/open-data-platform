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
import Heading from "../../../elements/Heading";

const Main = memo((props) => {

    const { data, url } = props;

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
            title: t("source"),
            detail: data ? (
                i18n.language === locales.EN ? data.resources.map(item => (
                    <Heading size="xxs" heading={item.title} />
                )) :
                    data.resources.map(item => (
                        <Heading size="xxs" heading={item.title_ar} />
                    ))
            ) : <Shimmer rounded='xs' width="70%" className={"my-1"} />
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
            detail: data ? url : <Shimmer rounded='xs' width="100%" className={"my-1"} />,
            color: colors.purple,
            underline: true
        },
        {
            title: t("license"),
            detail: data ? i18n.language === locales.EN ? "Abu Dhabi Government Open Data License" : "حكومة أبو ظبي رخصة البيانات المفتوحة" : <Shimmer rounded='xs' width="70%" className={"my-1"} />,
            color: colors.purple,
            underline: true,
            onClick: () => data && window.open(data.license, '_blank')
        }
    ]

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
        <Container fluid className="px-0">
            <DataHeader
                resources={data && data.resources}
                title={i18n.language === locales.AR ? data && data.title_ar : data && data.title}
                url={url}
                downloadCount={data && data.downloadCount}
            />
            <div className="px-2">
                <Tabs data={tabs} staticComponentOnRight={<DataCard data={f} />} />
            </div>
        </Container>
    )
});

export default Main;