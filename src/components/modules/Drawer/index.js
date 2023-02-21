import React, { memo, useEffect, useState } from "react";
import RMDrawer from 'react-modern-drawer'
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { locales } from '../../../i18n/helper';
import { useCallback } from "react";
import { colors } from "../../../utils/colors";
import { useAccordionButton } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import Heading from "../../elements/Heading";
import Tag from "../../elements/Tag";
import Button from "../../elements/Button";
import './style.css';
import 'react-modern-drawer/dist/index.css'

const Drawer = memo((props) => {

    const { t, i18n } = useTranslation()

    const { open, setOpen, onClickApplyFilter, appliedFilters } = props;

    const topics = useSelector((state) => state.facets.topics);
    const publishers = useSelector((state) => state.facets.publishers);
    const tags = useSelector((state) => state.facets.tags);

    const [activeIndex, setActiveIndex] = useState();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        if (appliedFilters && appliedFilters.length > 0) {
            setFilters([...appliedFilters])
        } else {
            setFilters([])
        }
    }, [appliedFilters])

    const data = [
        {
            title: t("categories"),
            tags: i18n.language === locales.AR ? publishers && publishers.ar : publishers && publishers.en
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

    const toggleDrawer = useCallback(() => setOpen(!open), [open]);

    const onClickItem = useCallback((item) => {

        let filter = [...filters]

        if (filters.some(el => el.title === item.title)) {

            let index = filters.indexOf(item)
            let temp = [...filter]

            temp.splice(index, 1)

            setFilters(temp)

        } else {
            filter.push(item)
            setFilters(filter)
        }

    }, [filters])

    const onClickAccordian = useCallback((index) => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index), [activeIndex]);

    const onClickClear = useCallback(() => {
        setFilters([])
    });

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!',),
        );

        return (
            activeIndex === eventKey ?
                <IoIosArrowDown color='black' style={{}} className="" size={20} /> :
                <IoIosArrowUp color='black' style={{}} className="" size={20} />
        );
    }

    return (
        <RMDrawer
            size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction={i18n.language === locales.AR ? 'left' : 'right'}
            lockBackgroundScroll
            style={{ overflow: "scroll", scrollBehavior: "smooth", overflowY: "scroll" }}
        >
            <div
                style={{ minHeight: "80vh" }}
                className="m-3 px-2">
                <div className="d-flex align-items-center justify-content-between mb-5">
                    <Heading size="xxs" heading={t("filter")} nomargin />
                    <RxCross2 style={{ cursor: "pointer" }} onClick={toggleDrawer} className="mx-1" size={20} />
                </div>
                {
                    data?.map((item, index) => {
                        return (
                            <>
                                <Accordion activeKey={activeIndex} key={index} className="bg-transparent">
                                    <Accordion.Item eventKey={index} className="border-0 my-2">
                                        <Accordion.Header onClick={() => onClickAccordian(index)}>
                                            <div className='w-100 d-flex justify-content-between' style={{ textAlign: 'start' }}>
                                                <Heading bold size="xs" heading={item.title} nomargin />
                                                <CustomToggle eventKey={index} />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className="d-flex flex-wrap">
                                                {
                                                    item.tags?.map((items, index) => {
                                                        return (
                                                            <div className={`my-1`}>
                                                                <Tag
                                                                    backgroundColor={filters.some(el => el.title === items.title) ? colors.black : colors.white}
                                                                    textColor={filters.some(el => el.title === items.title) ? colors.white : colors.black}
                                                                    // backgroundColor={filtersData?.some(items => items.title === item.title) ? "black" : "white"}
                                                                    // textColor={filtersData?.some(items => items.title === item.title) ? "white" : "black"}
                                                                    borderColor={"1px solid grey"}
                                                                    title={`${items.title} (${items.value})`}
                                                                    onClick={() => onClickItem(items)}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {
                                    index != data.length - 1
                                    && <hr className="" />
                                }
                            </>
                        )
                    })
                }
            </div>
            <div className="fixed">
                <hr />
                <div className="m-3 d-flex justify-content-between align-items-center">
                    <div className="">
                        <Button onClick={onClickClear} textColor={"#8207C9"} title={t("clearAll")} />
                    </div>
                    <div>
                        <Button onClick={() => onClickApplyFilter(filters)} title={`${t("apply")} ${filters.length > 0 ? `(${filters.length})` : ""}`} backgroundColor={"black"} textColor={"white"} />
                    </div>
                </div>
            </div>
        </RMDrawer>
    )
});

export default Drawer;