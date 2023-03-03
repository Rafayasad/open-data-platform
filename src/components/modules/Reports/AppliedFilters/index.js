import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";

const AppliedFilters = memo((props) => {

    const { filters } = props;

    return (
        <Row className="py-4 d-flex justify-content-center">
            <Col>
                <Row className="py-4">
                    <Col>
                        <Heading heading="Applied Filters" size='md' bold />
                    </Col>
                </Row>
                <Row className="py-2">
                    {
                        filters && Object.entries(filters).map((item) => (
                            <Col md={4}>
                                <Row>
                                    <Heading size='xs' capitalize bold heading={item[0].replace("_", " ")} color={colors.dark_gray} />
                                </Row>
                                <Row>
                                    <Heading size='xxs' heading={item[1]} color={colors.gray} />
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
            </Col>
        </Row>
    )
});

export default AppliedFilters;