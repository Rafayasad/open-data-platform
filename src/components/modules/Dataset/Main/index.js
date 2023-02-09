import React, { memo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";
import Search from "../../../elements/Search";
import Tag from "../../../elements/Tag";
import { RxCross2 } from "react-icons/rx";
import Drawer from "../../../modules/Drawer";

const Main = memo(() => {

    const [focusFilters, setFocusFilters] = useState([]);

    const filtersHandler = (data) => {
        setFocusFilters(data);
    }

    const deleteFilter = (items, index) => {
        const temp = focusFilters;
        temp.splice(index, 1)
        setFocusFilters([...temp])
    }

    return (
        <Container>
            <Drawer filtersHandler={filtersHandler} filters={focusFilters} />
            <Row className="py-2">
                <Col className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col />
                        <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                            <Heading color="black" heading={"Datasets to drive your curiosity"} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col xs={12} md={8} className="py-3">
                            <Search placeholder="Search Keywords" />
                        </Col>
                        <Col />
                    </Row>
                </Col>
            </Row>
            <Row className="py-1">
                <Col className="d-flex flex-wrap justify-content-center align-items-center">
                    {focusFilters?.map((item, index) =>
                    (
                        <div className="py-1">
                            <Tag
                                backgroundColor={"black"}
                                textColor={"white"}
                                title={item.name}
                                crossIcon={<RxCross2 size={20} onClick={() => deleteFilter(item, index)} />} />
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    )
});

export default Main;