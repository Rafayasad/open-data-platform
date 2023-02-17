import React, { memo, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Search from "../../../elements/Search";
import Tag from "../../../elements/Tag";
import { RxCross2 } from "react-icons/rx";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../utils/colors";

const Main = memo((props) => {

    const { search, onChangeSearch, onSelectedFilters } = props

    const { t } = useTranslation()

    const [selectedFilters, setSelectedFilters] = useState([]);

    const onClickApplyFilter = (filters) => {

        setSelectedFilters(filters)
        onSelectedFilters(filters)

    }

    const onDeleteFilter = (index) => {

        let temp = [...selectedFilters]

        temp.splice(index, 1)

        setSelectedFilters(temp)
        onSelectedFilters(temp)

    }

    return (
        <Container className="pt-5 my-5">
            <Row className="py-2">
                <Col className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col />
                        <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                            <Heading bold color="black" heading={t("datasetTitle")} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col xs={12} md={8} className="py-2">
                            <Search
                                placeholder={t("searchKeywords")}
                                onChange={onChangeSearch}
                                value={search}
                                filter
                                selectedFilters={selectedFilters}
                                onClickApplyFilter={onClickApplyFilter}
                            />
                        </Col>
                        <Col />
                    </Row>
                </Col>
            </Row>
            {
                selectedFilters && selectedFilters.length > 0 &&
                <Row className="">
                    <Col className="d-flex flex-wrap justify-content-center align-items-center">
                        {
                            selectedFilters && selectedFilters.length > 0 && selectedFilters.map((item, index) =>
                            (
                                <div className="py-1">
                                    <Tag
                                        backgroundColor={colors.black}
                                        textColor={"white"}
                                        title={item.title}
                                        crossIcon={<RxCross2 size={20} onClick={() => onDeleteFilter(index)} />} />
                                </div>
                            ))}
                    </Col>
                </Row>
            }
        </Container>
    )
});

export default Main;