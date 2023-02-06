import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";
import ListItem from "../../../elements/ListItem";

// const data = [
//     {
//         title: "Enviornment",
//         onClick: () => { }
//     },
//     {
//         title: "Police",
//         onClick: () => { }
//     },
//     {
//         title: "Agriculture",
//         onClick: () => { }
//     },
//     {
//         title: "Safety & Security",
//         onClick: () => { }
//     },
//     {
//         title: "Abu Dhabi",
//         onClick: () => { }
//     },
//     {
//         title: "Economy",
//         onClick: () => { }
//     },
//     {
//         title: "Agriculture",
//         onClick: () => { }
//     },
//     {
//         title: "Safety & Security",
//         onClick: () => { }
//     },
// ]

const Topics = memo((props) => {

    const { data } = props

    const [currentHovered, setCurrentHovered] = useState(null);
    const [all, setAll] = useState(false);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])
    const onClick = useCallback(() => setAll(!all))

    return (
        <Container fluid className="m-0 p-0" style={{
            backgroundColor: colors.black
        }}>
            <Row className="p-4 d-block d-sm-none">
                <Col>
                    <Heading size='xs' nomargin color={colors.white} heading="Explore Topics" />
                </Col>
            </Row>
            {
                data && data.length > 0 && data.slice(0, all ? data.length : 8).map((item, index) => (
                    <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave} >
                        {
                            index > 0 &&
                            <hr className="m-0 mx-3" style={{ color: currentHovered == index || currentHovered != null && currentHovered + 1 == index ? 'black' : 'lightgray', borderWidth: 2 }} />
                        }
                        <ListItem title={item.title} value={item.value} />
                    </div>
                ))
            }
            <Row className="py-3 m-0">
                <Col className="d-flex justify-content-end">
                    <Button borderColor='white' backgroundColor='black' textColor='white' title={all ? "View Less" : "View All"} onClick={onClick} />
                </Col>
            </Row>
        </Container>
    )
})

export default Topics;