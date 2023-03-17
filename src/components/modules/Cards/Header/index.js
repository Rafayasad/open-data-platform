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

const Header = memo((props) => {

    const { t } = useTranslation()

    const { title, backgroundColor, nobutton, size, dropdown, onClickButton, buttonText, filterbutton,
        appliedFilters, onClickApplyFilter, filterData, selectedYear, selectedSortBy
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
        <Container fluid className="d-flex justify-content-between align-items-center py-4">
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
                                        <div onClick={toggle} className='d-flex align-items-center justify-content-center filter py-2 px-2' style={{ borderRadius: '30px' }}>
                                            <MdOutlineFilterAlt size={24} />
                                            <div className="d-none d-lg-flex align-items-center justify-content-center">
                                                <p className='m-0'>{t("filters")}</p>
                                            </div>
                                        </div>
                                        <Drawer data={filterData} open={filterOpen} setOpen={setFilterOpen} onClickApplyFilter={onClickApply} appliedFilters={appliedFilters} />
                                    </>
                                    :
                                    null
                    }
                </Col>
            </Row>
        </Container >
    )
});

export default Header;