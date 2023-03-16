import React, { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Heading from '../../../elements/Heading';
import Search from '../../../elements/Search';

const Main = memo((props) => {

    const { popularSearch, onSearch } = props;

    const { t } = useTranslation()

    return (
        <Container className="pt-5 mt-5">
            <Row className="py-5">
                <Col className="d-flex flex-column justify-content-center">
                    <Row>
                        <Col />
                        <Col xs={10} md={6} style={{ textAlign: 'center' }} className="py-2">
                            <Heading bold color="black" heading={t("howCanHelp")} />
                        </Col>
                        <Col />
                    </Row>
                    <Row>
                        <Col />
                        <Col xs={12} md={10} lg={8} className="py-3" style={{ zIndex: 1000 }}>
                            <Search
                                searchData={popularSearch}
                                onPressEnter={onSearch}
                                placeholder={t("searchKeywords")}
                            />
                        </Col>
                        <Col />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
});

export default Main;