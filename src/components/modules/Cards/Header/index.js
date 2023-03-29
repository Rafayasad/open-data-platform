import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Dropdown from "../../../elements/DropDown";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";
import { MdOutlineFilterAlt, MdCancel } from 'react-icons/md';
import Drawer from "../../Drawer";
import { RxCross2 } from "react-icons/rx";
import Tag from "../../../elements/Tag";
import './style.css';

const Header = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, nobutton, size, dropdown, onClickButton, buttonText, filterbutton,
        appliedFilters, onClickApplyFilter, filterData, year, filters, onDeleteFilter, onClickClearAll, count, nocount
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
        <Container fluid className="py-4">
            <Row className="w-100 d-flex p-0 m-0 align-items-center justify-content-between">
                <Col md={8} lg={6} xs={!dropdown && nobutton ? 12 : 6} className="px-0">
                    <div>
                        <Heading
                            bold
                            nomargin
                            size={headingSize}
                            color={color}
                            heading={title} />
                    </div>
                </Col>
                {!dropdown && nobutton && !nocount &&
                    <Col xs={6} sm={6} className={"p-0 d-flex d-lg-none pt-3"}>
                        <Heading nomargin bold size={"lg"} heading={`${count ? count : 0} ${t("results")}`} />
                    </Col>
                }
                <Col md={dropdown ? 3 : 4} sm={6} xs={6} className={`px-0 ${count && "pt-3"} d-flex justify-content-end align-items-center`}>
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
                <Row className="pt-3">
                    <Col lg={6}className="d-none d-lg-flex align-items-center">
                        <Heading nomargin bold size={"lg"} heading={`${count ? count : 0} ${t("results")}`} />
                    </Col>
                    <Col lg={6} className="d-flex px-4 justify-content-end">
                        <Row className="d-flex align-items-center">
                            <Col xs={8} className={""}>
                                <div className="d-flex scroll">
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
                                </div>
                            </Col>
                            <Col xs={4} className="p-0 m-0">
                                <div onClick={onClickClearAll}
                                    style={{ cursor: "pointer" }}
                                    className="mx-1 d-flex align-items-center"><Heading color={colors.purple} heading={t("clearall")} size={"xxs"} nomargin />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            }
        </Container>
    )
});

export default Header;