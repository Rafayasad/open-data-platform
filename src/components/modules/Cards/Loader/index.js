import React, { memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import Shimmer from '../../../elements/Shimmer';

const Loader = memo((props) => {

    const { type, backgroundColor } = props

    return (
        Array(3).fill(null).map(() => (
            <Col md={4} className="py-2">
                {
                    type === 'image-outer-text' ? (
                        <div>
                            <Shimmer
                                backgroundColor={backgroundColor}
                                rounded="lg"
                                height={250}
                            />
                            <Row>
                                <Col className="py-3" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                                    <Shimmer rounded="xs" />
                                </Col>
                                <Col xs={12} sm={12} md={10} lg={10} xl={10} xxl={10}>
                                    <Shimmer rounded="xs" />
                                    <Shimmer className="my-1" rounded="xs" width={"50%"} />
                                </Col>
                            </Row>
                        </div>
                    ) : (
                        <Shimmer
                            backgroundColor={backgroundColor}
                            rounded="lg"
                            height={type === 'image-inner-text' ? 250 : 332}
                        />
                    )
                }
            </Col>
        ))
    )
});

export default Loader;