import React, { useRef, memo, useState, useCallback, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosSearch } from 'react-icons/io';
import { MdOutlineFilterAlt } from 'react-icons/md';
import { useTranslation } from "react-i18next";
import { colors } from "../../../utils/colors";
import Drawer from '../../modules/Drawer';
import Heading from "../Heading";
import './style.css'

const Search = memo((props) => {

    const [isExpand, setIsExpand] = useState(false);
    const wrapperRef = useRef(null);

    const { t } = useTranslation();

    const { placeholder, value, filter, onChange, onPressEnter, appliedFilters, onClickApplyFilter, searchData } = props

    console.log("andar", searchData);


    const [filterOpen, setFilterOpen] = useState(false);

    const [toggler, setToggler] = useState(false)

    const toggle = useCallback(() => {
        setToggler(false)
        setFilterOpen(!filterOpen)
    });

    const onChangeSearch = useCallback((e) => onChange && onChange(e.target.value));

    const onKeyDown = useCallback((e) => e.key === "Enter" && onPressEnter && onPressEnter(e.target.value))

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
            <Container fluid ref={wrapperRef}>
                <Row id="main" className={` ${toggler ? "search-box-active input-focused" : "search-box"}`}>
                    <Col xs={2} md={1} className='d-flex justify-content-center align-items-center'>
                        <IoIosSearch color="gray" size={24} />
                    </Col>
                    <Col className='p-0 d-flex align-items-center'>
                        <input onClick={() => setToggler(true)} type="text" className='border-0 bg-transparent w-100' value={value} placeholder={placeholder} onChange={onChangeSearch} onKeyDown={onKeyDown} />
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
                            <Drawer open={filterOpen} setOpen={setFilterOpen} onClickApplyFilter={onClickApply} appliedFilters={appliedFilters} />
                        </Col>
                    }
                </Row>
                {
                    toggler &&
                    <Row className="search-box-extend" style={{ width: toggler && document?.getElementById("main")?.offsetWidth }}>
                        <Col className="m-0">
                            <hr className="m-0 p-0" style={{ borderWidth: "2px", borderColor: colors.purple }} />
                            <div className="py-3">
                                <div className="px-5">
                                    <p style={{ fontSize: 12 }} className="py-2 m-0 text-secondary">{t("popularsearches")}</p>
                                </div>
                                {
                                    searchData?.map((item, index) => {
                                        return (
                                            <div className="d-flex px-5 py-1">
                                                <IoIosSearch color="black" size={20} />
                                                <div className="mx-2">
                                                    <Heading heading={item} size="xxs" nomargin onClick={() => onChangeSearch({ target: { value: item } })} />
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
        </div>
    )
});

export default Search;