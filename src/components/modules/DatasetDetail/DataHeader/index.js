import React, { useEffect, useState, memo } from "react";
import { Col, Container } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Button from "../../../elements/Button";
import Shimmer from "../../../elements/Shimmer";

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
            <Col md={8}>
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
            <Col className="d-flex justify-content-end">
                <div className="mx-1  ">
                    <Button title={"Download"} backgroundColor="black" textColor="white" />
                </div>
                <div className="mx-1  ">
                    <Button title={"Download"} backgroundColor="black" textColor="white" />
                </div>
            </Col>
        </Container >
    )
});

export default DataHeader;