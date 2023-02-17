import React, { memo, useState, useCallback } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { useTranslation } from "react-i18next";
import './index.css'
import Drawer from '../../modules/Drawer';
import { RxDotFilled } from "react-icons/rx";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { colors } from "../../../utils/colors";

const Search = memo((props) => {

    const { t } = useTranslation();

    const { placeholder, value, filter, onChange, onPressEnter, selectedFilters, onClickApplyFilter } = props

    const [filterOpen, setFilterOpen] = useState(false);

    const [filters, setFilters] = useState([]);

    const toggle = useCallback(() => setFilterOpen(!filterOpen));

    const onChangeSearch = useCallback((e) => onChange && onChange(e.target.value));

    const onKeyDown = useCallback((e) => e.key === "Enter" && onPressEnter && onPressEnter(e.target.value))

    const onClickApply = useCallback((filters) => {
        setFilterOpen(!filterOpen)
        onClickApplyFilter(filters)
    });

    const onClickClear = useCallback(() => {
        setFilters([])
    });

    return (
        <Container fluid>
            <Row className='search-box'>
                <Col xs={2} md={1} className='d-flex justify-content-center align-items-center'>
                    <IoIosSearch color="gray" size={24} />
                </Col>
                <Col className='p-0 d-flex align-items-center'>
                    <input type="text" className='border-0 bg-transparent w-100' value={value} placeholder={placeholder} onChange={onChangeSearch} onKeyDown={onKeyDown} />
                </Col>
                {
                    filter &&
                    <Col xs={3} md={2} xl={2} lg={2}>
                        <div onClick={toggle} className='d-flex align-items-center justify-content-center filter py-2 px-2' style={{ borderRadius: '30px' }}>
                            <MdOutlineFilterAlt size={24} />
                            <div className="d-none d-lg-flex align-items-center justify-content-center">
                                <p className='m-0'>{t("filters")}</p>
                            </div>
                            {/* {FOR RED DOT ICON} */}
                            {/* <div className="d-flex">
                                <sup>
                                    {
                                        selectedFilters.length > 0 &&
                                        <RxDotFilled size={20} color={colors.red} />
                                    }
                                </sup>
                            </div> */}
                        </div>
                        <Drawer open={filterOpen} setOpen={setFilterOpen} filters={filters} setFilters={setFilters} selectedFilters={selectedFilters} onClickApplyFilter={onClickApply} onClickClearFilter={onClickClear} />
                    </Col>
                }
            </Row>
        </Container >
    )
});

export default Search;