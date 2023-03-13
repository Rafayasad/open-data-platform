import React, { memo } from "react";
import View from "../../components/modules/View";
import wavybg from '../../assets/images/Wavy_Background.png';
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/helper";
import { colors } from "../../utils/colors";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../components/elements/Heading";

const Confirmation = memo((props) => {

    const { email, requestID } = props;

    const navigate = useNavigate();

    const data = [{
        icon: <MdOutlineMailOutline size={25} />,
        title: "Thank you for contacting us",
        message: "Keep an eye on your inbox. We’ll be in touch within 48h on johndoe@email.gov.ae",
        request_id: "Request ID: 123987"
    }]


    return (
        <View theme={"dark"} noupperfooter>
            <div className="pt-4 mt-3">
                <div
                    style={{
                        minHeight: "100vh",
                        width: "100vw",
                        backgroundImage: `url(${wavybg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "100vw 100%",
                        justifyContent:"center",
                        display:"flex"
                    }}>
                    <Container className="mt-5 d-flex justify-content-center align-items-center flex-column">
                        <Row className="my-2">
                            <Col>
                                <MdOutlineMailOutline size={40} color={"#762FFF"} />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Heading size={"md"} bold heading={"Thank you for contacting us"} />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Heading size={"xs"} heading={"Keep an eye on your inbox. We’ll be in touch within 48h on johndoe@email.gov.ae"} />
                            </Col>
                        </Row>
                        <Row className="my-2">
                            <Col>
                                <Heading size={"xs"} bold heading={"Request ID: 123987"} />
                            </Col>
                        </Row>
                        <Button
                            onClick={() => { navigate(routes.SUPPORT, { replace: true }) }}
                            title="Back to Support"
                            backgroundColor={colors.black}
                            textColor={colors.white} />
                    </Container>
                </div>
            </div>
        </View>
    )
})

export default Confirmation;