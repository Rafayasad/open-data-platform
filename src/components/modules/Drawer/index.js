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
import CheckBox from "../../elements/CheckBox";

const Drawer = memo((props) => {

    const { t, i18n } = useTranslation()

    const { open, setOpen, onClickApplyFilter, appliedFilters, data, year } = props;


    const [activeIndex, setActiveIndex] = useState();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        if (appliedFilters && appliedFilters.length > 0) {
            setFilters([...appliedFilters])
        } else {
            setFilters([])
        }
    }, [appliedFilters])
    console.log("sssssssss", filters, appliedFilters);

    const toggleDrawer = useCallback(() => setOpen(!open), [open]);

    const onClickStoriesItem = useCallback((items) => {


        console.log("itemmmms", items);

        const temp = [...filters]

        if ((items.type === t("categories"))) {

            let index = temp.findIndex(el => el.type == t("categories"))
            if (index > -1) {
                temp.splice(index, 1)
            }
        }
        else if ((items.type === t("year"))) {
            let index = temp.findIndex(el => el.type == t("year"))
            if (index > -1) {
                temp.splice(index, 1)
            }
        }
        else if ((items.type === t("sortBy"))) {
            let index = temp.findIndex(el => el.type == t("sortBy"))
            if (index > -1) {
                temp.splice(index, 1)
            }
        }
        temp.push(items)
        setFilters(temp)

    })

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

    function CustomToggle({ eventKey }) {
        return (
            activeIndex === eventKey ?
                <IoIosArrowUp color='black' style={{}} className="" size={20} />
                :
                <IoIosArrowDown color='black' style={{}} className="" size={20} />
        );
    }

    return (
        <RMDrawer
            size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction={i18n.language === locales.AR ? 'left' : 'right'}
            lockBackgroundScroll
        >
            <div className="p-4 bg-white d-flex align-items-center justify-content-between">
                <Heading size="xxs" heading={t("filters")} nomargin />
                <RxCross2 style={{ cursor: "pointer" }} onClick={toggleDrawer} className="mx-1" size={20} />
            </div>
            <hr className="m-0 p-0" />
            <div style={{ overflow: "scroll", scrollBehavior: "smooth", height: "75%" }} className={"p-4"}>
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
                                                                    title={`${items.title} ${items.value ? `(${items.value})` : ""}`}
                                                                    onClick={() => item.title === t("categories") ?
                                                                        onClickStoriesItem({
                                                                            type: t("categories"),
                                                                            title: items.title,
                                                                            id: items.id
                                                                        })
                                                                        : onClickItem(items)}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            {
                                                item.data &&
                                                <div className="">
                                                    {
                                                        item.data?.map((items, index) => {
                                                            return (
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div className="py-2">
                                                                        <Heading nomargin heading={items.title} size={"xs"} />
                                                                    </div>
                                                                    <div>
                                                                        <CheckBox
                                                                            checked={filters?.some(el => items.type === el.type && el.title === items.title)}
                                                                            callBack={() => {
                                                                                onClickStoriesItem(items)
                                                                                items.onclick(items.title)
                                                                            }} borderColor={colors.black} />
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            }
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
            <div className="h-20">
                <hr className="m-0 p-0" />
                <div className="p-2 d-flex justify-content-between align-items-center">
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