import React, { memo, useEffect, useState, useCallback } from "react";
import RMDrawer from 'react-modern-drawer'
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { locales, string } from '../../../../i18n/helper';
import { colors } from "../../../../utils/colors";
import Accordion from 'react-bootstrap/Accordion';
import Heading from "../../../elements/Heading";
import Tag from "../../../elements/Tag";
import Button from "../../../elements/Button";
import DatePicker from "../../../elements/DatePicker";
import Dropdown from "../../../elements/DropDown";
import '../../../modules/Drawer/style.css';
import 'react-modern-drawer/dist/index.css';

const ReportsFilter = memo((props) => {

    const { t, i18n } = useTranslation();
    const { open, setOpen, appliedFilters, onApplyFilters, accordinData, kpi } = props;

    const initialFilters = {
        date_type: "Modified"
    }

    const [activeIndex, setActiveIndex] = useState();
    const [filters, setFilters] = useState(initialFilters);

    const toggleDrawer = useCallback(() => setOpen(!open), [open]);
    const onClickAccordian = useCallback((index) => activeIndex === index ? setActiveIndex(null) : setActiveIndex(index), [activeIndex]);

    const CustomToggle = (({ eventKey }) => {
        return (
            activeIndex === eventKey ?
                <IoIosArrowUp color={colors.black} size={20} /> :
                <IoIosArrowDown color={colors.black} size={20} />
        );
    });

    const SortbyData = [
        {
            title: string("modified"),
            onClick: (date_type) => onChangeFilter({ date_type }),
        },
        {
            title: string("created"),
            onClick: (date_type) => onChangeFilter({ date_type }),
        }
    ]

    const SortbyKPI = [
        {
            title: t("yes"),
            onClick: (kpi) => onChangeFilter({ kpi }),
        },
        {
            title: t("no"),
            onClick: (kpi) => onChangeFilter({ kpi }),
        }
    ]



    useEffect(() => {
        if (appliedFilters) {
            setFilters({ ...filters, ...appliedFilters })
        }
    }, [appliedFilters])

    const onClickItem = useCallback((item) => {
        item.type === "publisher__name" && setFilters({ ...filters, publisher: item.title });
        item.type === "theme" && setFilters({ ...filters, topic: item.title });

    }, [filters])

    const onChangeFilter = useCallback((filter) => setFilters({ ...filters, ...filter }), [filters]);

    const onClickApply = useCallback(() => {
        toggleDrawer()
        if (onClickApply) {
            onApplyFilters(filters)
        }
    });

    const onClickClear = useCallback(() => setFilters(initialFilters));

    return (
        <RMDrawer
            size={"400px"}
            open={open}
            onClose={toggleDrawer}
            direction={i18n.language === locales.AR ? 'left' : 'right'}
            lockBackgroundScroll
        >
            <div className="p-4 bg-white d-flex align-items-center justify-content-between">
                <Heading size="xxs" heading={t("filter")} nomargin />
                <RxCross2 style={{ cursor: "pointer" }} onClick={toggleDrawer} className="mx-1" size={20} />
            </div>

            <hr className="m-0 p-0" />
            <div style={{ overflow: "scroll", scrollBehavior: "smooth", height: "75%" }} className={"p-4"}>
                <div className="w-100">
                    <Dropdown
                        dropdownWidth={"100%"}
                        padding={"px-1"}
                        name={"Date type"}
                        options={SortbyData}
                        selectedValue={filters?.date_type}
                    />
                </div>
                {kpi &&
                    <div className="w-100">
                        <Dropdown
                            padding={"px-1"}
                            name={"KPI"}
                            options={SortbyKPI}
                            selectedValue={filters?.kpi ? filters.kpi : "selectOption"}
                        />
                    </div>
                }
                <div className="d-flex my-3">
                    <div className="w-100">
                        <DatePicker value={filters?.start_date} title={"Start Date"} onChange={(start_date) => onChangeFilter({ start_date })} maxDate={filters?.end_date} />
                    </div>
                </div>
                <div className="d-flex my-3">
                    <div className="w-100">
                        <DatePicker value={filters?.end_date} title={"End Date"} onChange={(end_date) => onChangeFilter({ end_date })} minDate={filters?.start_date} />
                    </div>
                </div>
                <div className="py-2">
                    {
                        accordinData?.map((item, index) => {
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
                                                                        backgroundColor={items.type === 'publisher__name' ? filters?.publisher === items.title ? colors.black : colors.white : items.type === 'theme' ? filters?.topic === items.title ? colors.black : colors.white : null}
                                                                        textColor={items.type === 'publisher__name' ? filters?.publisher === items.title ? colors.white : colors.black : items.type === 'theme' ? filters?.topic === items.title ? colors.white : colors.black : null}
                                                                        borderColor={"1px solid grey"}
                                                                        title={items.title}
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
                                        index != accordinData.length - 1
                                        && <hr className="" />
                                    }
                                </>
                            )
                        })
                    }
                </div>
            </div>

            <div className="h-25">
                <hr className="m-0 p-0" />
                <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="">
                        <Button onClick={onClickClear} textColor={"#8207C9"} title={t("clearAll")} />
                    </div>
                    <div>
                        <Button onClick={onClickApply} title={t("apply")} backgroundColor={"black"} textColor={"white"} />
                    </div>
                </div>
            </div>

        </RMDrawer>
    )
})

export default ReportsFilter;