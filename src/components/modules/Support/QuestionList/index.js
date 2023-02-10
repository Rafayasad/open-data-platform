import React, { memo, useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import QuestionListItem from "../../../elements/QuestionListItem";
import Header from '../../Cards/Header';

const QuestionList = memo((props) => {

    const { title, data, onClick } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    return (
        <Container fluid className="my-4">
            <Header title={title} backgroundColor={colors.white} nobutton />
            <Row>
                {
                    data && data.length > 0 && data.map((item, index) => (
                        <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave}>
                            {
                                index > 0 &&
                                <hr className="m-0" style={{ color: currentHovered == index || currentHovered != null && currentHovered + 1 == index ? 'white' : 'lightgray', borderWidth: 2 }} />
                            }
                            <QuestionListItem title={item.title} onClick={() => onClick(item.id)} />
                        </div>
                    ))
                }
            </Row>
        </Container>
    )
});

export default QuestionList;