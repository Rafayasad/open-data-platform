import React, { memo, useEffect, useState } from "react";
import RMDrawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { RxCross2 } from "react-icons/rx";
import Accordion from 'react-bootstrap/Accordion';
import './style.css';
import Heading from "../../elements/Heading";
import Tag from "../../elements/Tag";
import Button from "../../elements/Button";
import { useTranslation } from "react-i18next";

const Drawer = memo((props) => {

    const { t } = useTranslation()

    const { filtersHandler, filters, open, setOpen } = props;

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
            title: "Categories",
            tags: [
                { name: "Education", type: "theme", count: "20" },
                { name: "School", type: "theme", count: "20" },
                { name: "Police", type: "theme", count: "20" },
            ]
        },
        {
            title: "Topics",
            tags: [
                { name: "Educatio", type: "topics", count: "20" },
                { name: "Schoo", type: "topics", count: "20" },
                { name: "Polie", type: "topics", count: "20" },
            ]
        },
        {
            title: "Tags",
            tags: [
                { name: "Eduation", type: "tags", count: "20" },
                { name: "Schl", type: "tags", count: "20" },
                { name: "Pice", type: "tags", count: "20" },
            ]
        }
    ]

    useEffect(() => {
        setFiltersData(filters)
    }, [filters])

    return (
        <RMDrawer
            size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction='right'
            className=''
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
                                                            data={item}
                                                            backgroundColor={filtersData?.some(items => items.name === item.name) ? "black" : "white"}
                                                            textColor={filtersData?.some(items => items.name === item.name) ? "white" : "black"}
                                                            borderColor={"1px solid grey"}
                                                            title={item.name}
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
                <div className="fixed-bottom">
                    <hr />
                    <div className="m-3 d-flex justify-content-between align-items-center">
                        <div className="">
                            <Button onClick={() => setFiltersData([])} textColor={"#8207C9"} title={"Clear"} />
                        </div>
                        <div>
                            <Button onClick={() => filtersHandler(filtersData)} title={`Apply ${filtersData?.length ? "(" + filtersData.length + ")" : ""}`} backgroundColor={"black"} textColor={"white"} />
                        </div>
                    </div>
                </div>
            </div>
        </RMDrawer>
    )
});

export default Drawer;