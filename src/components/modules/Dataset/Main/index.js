import React, { memo, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import Heading from "../../../elements/Heading";
import Search from "../../../elements/Search";
import Tag from "../../../elements/Tag";
import { colors } from "../../../../utils/colors";

const Main = memo((props) => {

    const { search, onChangeSearch, filter, onApplyFilter, onDeleteFilter } = props

    const { t } = useTranslation();

    return (
        <>
            <Container className="pt-5 mt-5">
                <Row className="pt-5 pb-2">
                    <Col className="d-flex flex-column justify-content-center">
                        <Row>
                            <Col />
                            <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                                <Heading bold color={colors.black} heading={t("datasetTitle")} />
                            </Col>
                            <Col />
                        </Row>
                    </Col>
                </Row>
            </Container >
            <Container fluid className="sticky-top bg-white mb-5">
                <Row>
                    <Col />
                    <Col xs={12} md={10} lg={8} className="py-3">
                        <Search
                            placeholder={t("searchKeywords")}
                            onChange={onChangeSearch}
                            value={search}
                            filter
                            appliedFilters={filter}
                            onClickApplyFilter={onApplyFilter}
                        />
                    </Col>
                    <Col />
                </Row>
                {
                    filter && filter.length > 0 &&
                    <Row className="pb-3">
                        <Col className="d-flex flex-wrap justify-content-center align-items-center">
                            {
                                filter && filter.length > 0 && filter.map((item, index) =>
                                (
                                    <div className="py-1">
                                        <Tag
                                            backgroundColor={colors.black}
                                            textColor={"white"}
                                            title={item.title}
                                            crossIcon={<RxCross2 size={20} onClick={() => onDeleteFilter(item)} />} />
                                    </div>
                                ))}
                        </Col>
                    </Row>
                }
            </Container>
        </>
    )
});

export default Main;