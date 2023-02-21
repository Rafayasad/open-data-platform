import React, { useEffect, useState, memo } from "react";
import { Col, Container } from "react-bootstrap";
import { SlShare } from "react-icons/sl";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import Shimmer from "../../../elements/Shimmer";
import { colors } from "../../../../utils/colors";

const DataHeader = memo((props) => {

    const { title } = props

    const [headerOnTop, setHeaderOnTop] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (document?.getElementById("main")?.getBoundingClientRect().top <= 20) {
                setHeaderOnTop(true)
            } else {
                setHeaderOnTop(false)
            }
        }
    }, [])

    return (
        <Container id='main' fluid className={`d-flex justify-content-between align-items-center py-4 bg-white ${headerOnTop && "sticky-top"}`}>
            <Col md={12} lg={8}>
                {
                    !title ? <><Shimmer rounded="xs" height={"32px"} className="my-2" /><Shimmer rounded="xs" height={"32px"} width="70%" className="my-2" /></> : (
                        <Heading
                            bold
                            nomargin
                            size={headerOnTop ? 'lg' : "xl"}
                            heading={title}
                            maxNumberOfLines={headerOnTop && 2}
                        />
                    )
                }
            </Col>
            <Col className="d-none d-lg-flex justify-content-end">
                <div className="mx-1">
                    <Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />
                </div>
                <div className="mx-1  ">
                    <Button title={"Download"} backgroundColor="black" textColor="white" />
                </div>
            </Col>
            <div className="d-flex d-lg-none justify-content-between align-items-center fixed-bottom bg-white p-3">
                <Col>
                    <Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />
                </Col>
                <Col xs={4} className="d-flex justify-content-center align-items-center px-3 text-end">
                    <Heading size='xxs' nomargin heading="135 downloads" />
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button title={"Download"} backgroundColor="black" textColor="white" />
                </Col>
                {/* <div className="mx-1">
                </div> */}
                {/* <div className="mx-1">
                    <div className="d-flex align-items-center">
                    </div>
                </div> */}
            </div>
        </Container >
    )
});

export default DataHeader;