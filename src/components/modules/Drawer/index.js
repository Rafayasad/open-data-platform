import React, { Fragment, memo, useEffect, useState } from "react";
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
import SearchBox from "../../elements/SearchBox";

const Drawer = memo((props) => {

    const { t, i18n } = useTranslation()

    const { open, setOpen, onClickApplyFilter, appliedFilters, data, year } = props;
    // const { isLoggedIn } = useSelector(state => state.authentication);
    { console.log("tas", data) }
    const [activeIndex, setActiveIndex] = useState();
    const [filters, setFilters] = useState([]);
    const [searchFilters, setSearchFilters] = useState();

    const [filteredData, setFilteredData] = useState();

    useEffect(() => {
        if (appliedFilters && appliedFilters.length > 0) {
            setFilters([...appliedFilters])
        } else {
            setFilters([])
        }
    }, [appliedFilters])

    const toggleDrawer = useCallback(() => setOpen(!open), [open]);

    const onClickStoriesItem = useCallback((items) => {

        const temp = [...filters]

        if (filters.some(el => el.title === items.title)) {

            let index = filters.findIndex(el => el.title === items.title)
            let tempArr = [...temp]
            tempArr.splice(index, 1)
            setFilters(tempArr)

        } else {

            if ((items.type === t("year"))) {
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
        }

    })

    const onClickItem = useCallback((item) => {

        console.log(item);

        let filter = [...filters]

        if (filters.some(el => el.title === item.title)) {

            let index = filters.indexOf(item)
            let temp = [...filter]
            temp.splice(index, 1)
            setFilters(temp)

        } else {
            if (i18n.language === locales.EN ? item.type === 'publisher__name' : i18n.language === locales.AR && item.type === 'publisherlear__name') {
                let index = filter.findIndex(el => i18n.language === locales.EN ? el.type == 'publisher__name' : i18n.language === locales.AR && el.type === "publisherlear__name")
                if (index > -1) {
                    filter.splice(index, 1)
                }
            }
            // if()
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

    const filterByValue = (value) => {
        setSearchFilters(value);
    }

    const getFilteredSearch = (item) => {
        return (
            item.tags?.filter(el => {
                if (searchFilters && searchFilters.type === item.title) {
                    if (el.title.toLowerCase().includes(searchFilters.title.toLowerCase())) {
                        return el;
                    }
                } else {
                    return item.tags;
                }
            })
        )
    }


    return (
        <RMDrawer
            // size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction={i18n.language === locales.AR ? 'left' : 'right'}
            lockBackgroundScroll
            style={{ zIndex: 1000, height: "100%", width: window.innerWidth >= 800 ? "30%" : "100%" }}
        // className="mt-5"
        >
            <div style={{ height: "100%" }}>
                <div style={{ top: 0, position: "relative", left: 0, right: 0, zIndex: 1000 }} className="p-4 bg-white d-flex align-items-center justify-content-between shadow-bottom">
                    <Heading size="xxs" heading={t("filters")} nomargin />
                    <RxCross2 style={{ cursor: "pointer" }} onClick={toggleDrawer} className="" size={20} />
                </div>
                <div style={{ overflow: "scroll", scrollBehavior: "smooth", height: "75%" }} className={`p-4`}>
                    {
                        data?.map((item, index) => {
                            return (
                                <>
                                    <Accordion activeKey={activeIndex} key={index} className="bg-transparent">
                                        <Accordion.Item eventKey={index} className="border-0 my-3">
                                            <Accordion.Header onClick={() => onClickAccordian(index)}>
                                                <div className='w-100 d-flex justify-content-between align-items-center' style={{ textAlign: 'start' }}>
                                                    <p className={`${i18n.language === locales.AR ? "ar-font-bold" : "en-font-bold"} fs-sm m-0`}>{item.title}</p>
                                                    {/* <Heading bold size="xs" heading={item.title} nomargin /> */}
                                                    <CustomToggle eventKey={index} />
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                <Fragment>
                                                    <div className="d-flex flex-wrap">
                                                        {item.title != t("fileFormat")
                                                            &&
                                                            <div className="w-100 p-0 pb-3 m-0">
                                                                <SearchBox title={item.title} setSearchValue={filterByValue} />
                                                            </div>
                                                        }
                                                        {getFilteredSearch(item)?.length > 0 ? getFilteredSearch(item)?.map((items, index) => {
                                                            return (
                                                                <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                                                                    <Tag
                                                                        hoverEffect
                                                                        backgroundColor={filters.some(el => el.title === items.title) ? colors.black : colors.white}
                                                                        textColor={filters.some(el => el.title === items.title) ? colors.white : colors.black}
                                                                        // backgroundColor={filtersData?.some(items => items.title === item.title) ? "black" : "white"}
                                                                        // textColor={filtersData?.some(items => items.title === item.title) ? "white" : "black"}
                                                                        borderColor={"1px solid #cfcfcf"}
                                                                        title={`${items.title} ${items.value ? `(${items.value})` : "(0)"}`}
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
                                                            : item.title != t("fileFormat") && <Tag
                                                                backgroundColor={colors.white}
                                                                textColor={colors.black}
                                                                borderColor={"1px solid #cfcfcf"}
                                                                title={t("noResultFound!")}
                                                            />
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
                                                                                <Heading nomargin heading={`${items.title} ${items.value ? `(${items.value})` : ""}`} size={"xxs"} />
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
                                                </Fragment>
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
            </div>
            <div className="fixed-bottom d-flex align-items-center justify-content-between">
                <hr className="m-0 p-0" />
                <div className="w-100 p-2 bg-white d-flex justify-content-between align-items-center">
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