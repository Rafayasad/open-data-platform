import React, { useRef, memo, useState, useCallback, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import _ from 'lodash';
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineFilterAlt, MdCancel } from 'react-icons/md';
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/colors";
import Drawer from '../../modules/Drawer';
import Heading from "../Heading";
import './style.css'
import ExpandSearchBarModal from "./ExpandSearchBarModal";
import { isEmptyString } from "../../../utils/generic";
import i18n from "../../../i18n/i18n";

const Search = memo((props) => {

    const [openModal, setOpenModal] = useState(false);
    const wrapperRef = useRef(null);

    const { t } = useTranslation();

    const { nofilter, filterData, nofocuseffect, placeholder, value, filter, onChange, onPressEnter, appliedFilters, onClickApplyFilter, searchData } = props;

    const [filterOpen, setFilterOpen] = useState(false);

    const [toggler, setToggler] = useState(false)
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        setInputText(value)

    }, [value])

    const toggle = useCallback(() => {
        setToggler(false)
        setFilterOpen(!filterOpen)
    });

    const onChangeSearch = useCallback((e) => {
        setInputText(e.target.value);
    });

    const onClickedPopularSearch = useCallback((e) => {
        setInputText(e.target.value);
        setOpenModal(false)
        setToggler(false)
        onPressEnter((e.target.value).trim())
    })

    const onKeyDown = useCallback((e) => {

        let value = e.target.value;

        if (e.key === "Enter" && !isEmptyString(value)) {
            onPressEnter && onPressEnter((value).trim())
            setInputText(value.trim())
            setOpenModal(false)
            setToggler(false)
        }
    }, [toggler, openModal])

    const onClickApply = useCallback((filters) => {
        setFilterOpen(!filterOpen)
        onClickApplyFilter(filters)
    });

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setToggler(false)
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    return (
        <div>
            {
                openModal &&
                <ExpandSearchBarModal
                    value={inputText}
                    onChangeSearch={onChangeSearch}
                    onKeyDown={onKeyDown}
                    placeholder={placeholder}
                    searchData={searchData}
                    show={openModal}
                    setShow={() => setOpenModal(false)} />
            }
            <Container id="cont" fluid ref={wrapperRef}>
                <Row id="main" className={`${toggler && !nofocuseffect ? "search-box-active input-focused" : "search-box"}`}>
                    {/* <Col xs={2} md={1} className='d-flex justify-content-center align-items-center'>
                    </Col> */}
                    <Col className='p-0 d-flex align-items-center'>
                        <div className="ms-3 me-3">
                            <IoIosSearch color="gray" size={24} />
                        </div>
                        <input
                            onClick={() => {
                                document?.getElementById("cont")?.offsetWidth <= 540 ?
                                    setOpenModal(true)
                                    :
                                    setToggler(true)
                            }}
                            type="text"
                            className='border-0 bg-transparent w-100 placeholder-color'
                            value={inputText} placeholder={placeholder} onChange={onChangeSearch} onKeyDown={onKeyDown} />
                    </Col>
                    {
                        inputText?.length > 0 ?
                            <Col md={1} lg={1} xs={2}>
                                <MdCancel color="#9f9f9f" style={{ cursor: "pointer" }} onClick={() => {
                                    setInputText('');
                                    onPressEnter('');
                                }} size={24} />
                            </Col>
                            :
                            filter && !nofilter &&
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
                                <Drawer data={filterData} open={filterOpen} setOpen={setFilterOpen} onClickApplyFilter={onClickApply} appliedFilters={appliedFilters} />
                            </Col>
                    }
                </Row>
                {
                    toggler && !nofocuseffect &&
                    <Row className="search-box-extend d-none d-md-block" style={{ width: toggler && document?.getElementById("main")?.offsetWidth }}>
                        <Col className="m-0">
                            <hr className="m-0 p-0" style={{ borderWidth: "2px", borderColor: colors.purple }} />
                            <div className="py-3">
                                <div className="px-5">
                                    <p style={{ fontSize: 12 }} className="py-2 m-0 text-secondary">{t("popularsearches")}</p>
                                </div>
                                {
                                    searchData?.slice(-5).map((item, index) => {
                                        return (
                                            <div key={index} className="d-flex px-5 py-1">
                                                <IoIosSearch color="black" size={20} />
                                                <div className="mx-2">
                                                    <Heading heading={item} size="xxs" nomargin onClick={() => onClickedPopularSearch({ target: { value: item } })} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                }
            </Container>
        </div >
    )
});

export default Search;