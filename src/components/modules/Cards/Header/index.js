import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt, MdCancel } from 'react-icons/md';
import Drawer from "../../Drawer";
import './style.css';
import { RxCross2 } from "react-icons/rx";
import Tag from "../../../elements/Tag";

const Header = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, nobutton, size, dropdown, onClickButton, buttonText, filterbutton,
        appliedFilters, onClickApplyFilter, filterData, year, filters, onDeleteFilter, onClickClearAll, count
    } = props;

    const onClickApply = useCallback((filters) => {
        setFilterOpen(!filterOpen)
        onClickApplyFilter(filters)
    });

    const [filterOpen, setFilterOpen] = useState(false);

    const toggle = useCallback(() => { setFilterOpen(!filterOpen) });

    let color = colors.white;
    let headingSize;

    if (backgroundColor === colors.white) {
        color = colors.black
    }

    if (size !== 'lg') {
        headingSize = 'xl'
    }

    return (
        <Container fluid className=" py-4">
            <Row className="w-100 p-0 m-0 align-items-center">
                <Col className="px-0">
                    <div>
                        <Heading
                            bold
                            nomargin
                            size={headingSize}
                            color={color}
                            heading={title} />
                    </div>
                </Col>
                <Col md={3} xs={6} className="px-0 d-flex justify-content-end align-items-center">
                    {
                        !nobutton ?
                            <div>
                                <Button
                                    title={buttonText ? buttonText : t("viewAll")}
                                    textColor={color}
                                    borderColor={color}
                                    backgroundColor='transparent'
                                    onClick={onClickButton}
                                />
                            </div> :
                            dropdown ?
                                <Dropdown
                                    textColor={dropdown.selectedValue && "black"}
                                    highlightableItem
                                    autoClose={true}
                                    name={dropdown.title}
                                    options={dropdown.options}
                                    selectedValue={dropdown.selectedValue}
                                    dropdownWidth={"100%"}
                                    width={"100%"}
                                /> :
                                filterbutton ?
                                    <>
                                        {/* <div onClick={toggle} className='d-flex align-items-center justify-content-center filter py-2 px-2' style={{ borderRadius: '30px' }}>
                                            <MdOutlineFilterAlt size={24} />
                                            <div className="d-none d-lg-flex align-items-center justify-content-center">
                                                <p className='m-0'>{t("filters")}</p>
                                            </div>
                                        </div> */}
                                        <div onClick={toggle} className='d-flex align-items-center justify-content-center filter py-2 px-3' style={{ borderRadius: '30px' }}>
                                            <MdOutlineFilterAlt size={24} />
                                            <div className="d-none d-lg-flex align-items-center justify-content-center">
                                                <p className='m-0'>{t("filters")}</p>
                                            </div>
                                        </div>
                                        <Drawer year={year} data={filterData} open={filterOpen} setOpen={setFilterOpen} onClickApplyFilter={onClickApply} appliedFilters={appliedFilters} />
                                    </>
                                    :
                                    null
                    }
                </Col>
            </Row>
            {
                filters && filters.length > 0 &&
                <Row className="pt-4">
                    <Col className="d-flex align-items-center">
                        <Heading nomargin bold size={"lg"} heading={`${count} Results`} />
                    </Col>
                    <Col className="d-flex flex-wrap justify-content-end py-2 align-items-center">
                        {
                            filters?.map((item, index) => {
                                return (
                                    <Tag
                                        key={index}
                                        backgroundColor={colors.black}
                                        textColor={colors.white}
                                        title={item.title}
                                        crossIcon={<RxCross2 size={20} onClick={() => onDeleteFilter(item)} />} />
                                )
                            })
                        }
                        <div onClick={onClickClearAll}
                            style={{ cursor: "pointer" }}
                            className="px-2 d-flex align-items-center"><Heading color={colors.purple} heading={"Clear all"} size={"xxs"} nomargin /></div>
                    </Col>
                </Row>
            }
        </Container>
    )
});

export default Header;