import React, { memo, useEffect, useState } from "react";
import RMDrawer from 'react-modern-drawer'
import { RxCross2 } from "react-icons/rx";
import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from "react-i18next";
import './style.css';
import 'react-modern-drawer/dist/index.css'
import Heading from "../../elements/Heading";
import Tag from "../../elements/Tag";
import Button from "../../elements/Button";
import { getFacets } from '../../../axios/api/index';
import { locales } from '../../../i18n/helper';

const Drawer = memo((props) => {

    const { t, i18n } = useTranslation()

    const { filtersHandler, filters, open, setOpen } = props;

    const [topics, setTopics] = useState();
    const [tags, setTags] = useState();
    const [publisher, setPublisher] = useState();

    const [filtersData, setFiltersData] = useState([]);

    const toggleDrawer = () => {
        setOpen(!open)
    }

    const onFocusItems = (items) => {
        if (filtersData?.some(item => item.name === items.name)) {
            var a = filtersData.findIndex(item => item.name === items.name)
            var b = filtersData
            b.splice(a, 1);
            setFiltersData([...b])
        }
        else {
            setFiltersData([...filtersData, items])
        }
    }

    const data = [
        {
            title: t("categories"),
            tags: i18n.language === locales.AR ? publisher && publisher.ar : publisher && publisher.en
        },
        {
            title: t("topics"),
            tags: i18n.language === locales.AR ? topics && topics.ar : topics && topics.en
        },
        {
            title: t("tags"),
            tags: i18n.language === locales.AR ? tags && tags.ar : tags && tags.en
        }
    ]

    useEffect(() => {
        getFacets("theme", "themelear", setTopics)
        getFacets("keyword", "keywordlear", setTags)
        getFacets("publisher__name", "publisherlear__name", setPublisher)
        setFiltersData(filters)
    }, [filters])

    return (
        <RMDrawer
            size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction='right'
            lockBackgroundScroll
        >
            <div className="m-3 px-3">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <Heading size="xxs" heading={t("filter")} nomargin />
                    <RxCross2 style={{ cursor: "pointer" }} onClick={toggleDrawer} className="mx-1" size={20} />
                </div>
                {data?.map((item, index) => {
                    return (
                        <>
                            <Accordion key={index} className="bg-transparent">
                                <Accordion.Item eventKey={index} className="border-0 my-2">
                                    <Accordion.Header>
                                        <div className="col-11" style={{ textAlign: "start" }}>
                                            <Heading size="xs" heading={item.title} nomargin />
                                        </div>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <div className="d-flex flex-wrap">
                                            {item.tags?.map((item, index) => {
                                                return (
                                                    <div className={`my-1`}>
                                                        <Tag
                                                            backgroundColor={filtersData?.some(items => items.title === item.title) ? "black" : "white"}
                                                            textColor={filtersData?.some(items => items.title === item.title) ? "white" : "black"}
                                                            borderColor={"1px solid grey"}
                                                            title={`${item.title} (${item.value})`}
                                                            onClick={() => onFocusItems(item)}
                                                        />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                            <hr />
                        </>
                    )
                })}
                <div className="fixed-bottom bg-white">
                    <hr />
                    <div className="m-3 d-flex justify-content-between align-items-center">
                        <div className="">
                            <Button onClick={() => setFiltersData([])} textColor={"#8207C9"} title={t("clearAll")} />
                        </div>
                        <div>
                            <Button onClick={() => filtersHandler(filtersData)} title={`${t("apply")} ${filtersData?.length ? "(" + filtersData.length + ")" : ""}`} backgroundColor={"black"} textColor={"white"} />
                        </div>
                    </div>
                </div>
            </div>
        </RMDrawer>
    )
});

export default Drawer;