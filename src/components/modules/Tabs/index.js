import React, { memo, useState } from "react";
import { Col, Container, Nav, Tab } from "react-bootstrap";
import './style.css';
import { colors } from "../../../utils/colors";
import { routes } from "../../../router/helper";
import Heading from "../../elements/Heading";

const Tabs = memo((props) => {

    const { data, staticComponentOnRight } = props;

    const [active, setActive] = useState(0);

    return (
        <Container fluid>
            <Tab.Container defaultActiveKey={0} activeKey={active}>
                <div>
                    <Col sm={12} style={{ borderBottom: '1.5px solid #CFCFCF' }}>
                        <Nav>
                            {
                                data.map((item, index) => (
                                    <Nav.Item className="mx-1" onClick={() => setActive(index)}>
                                        <p className={`${active == index && "tab-underline"} m-0 ${item.name === "API Documentation" && "px-4"}`} style={{ color: active == index ? colors.black : colors.gray , cursor:"pointer" }} >{item.name}</p>
                                    </Nav.Item>
                                ))
                            }
                        </Nav>
                    </Col>
                </div>
                <div className="d-flex py-3" style={{ borderBottom: '1.5px solid #CFCFCF' }}>
                    <Col sm={12} lg={8}>
                        <Tab.Content>
                            {
                                data.map((item, index) => (
                                    <Tab.Pane eventKey={index}>
                                        {item.component}
                                    </Tab.Pane>
                                ))
                            }
                        </Tab.Content>
                    </Col>
                    {
                        staticComponentOnRight &&
                        <Col sm={12} lg={4} className="d-flex ">
                            <div className="mx-4 d-none d-lg-block" style={{ border: '1px solid #CFCFCF' }} />
                            {staticComponentOnRight}
                        </Col>
                    }
                </div>
            </Tab.Container>
        </Container>
    )
});

export default Tabs;