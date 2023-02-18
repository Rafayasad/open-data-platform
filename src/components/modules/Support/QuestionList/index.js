import React, { memo, useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import QuestionListItem from "../../../elements/QuestionListItem";
import Header from '../../Cards/Header';

const data = [
    {
        title: "What is dataset?"
    },
    {
        title: "Are there any restrictions on how I can use Open Data?"
    },
    {
        title: "How do I request a dataset that I cannot find?"
    },
]

const QuestionList = memo((props) => {

    const { title } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    return (
        <Container fluid className="my-4">
            {/* <Row> */}
            <Header title={title} backgroundColor={colors.white} nobutton />
            {/* </Row> */}
            <Row>
                {
                    data.map((item, index) => (
                        <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave}>
                            {
                                index > 0 &&
                                <hr className="m-0" style={{ color: currentHovered === index || currentHovered != null && currentHovered + 1 === index ? 'white' : 'lightgray', borderWidth: 2 }} />
                            }
                            <QuestionListItem title={item.title} />
                        </div>
                    ))
                }
            </Row>
        </Container>
    )
});

export default QuestionList;