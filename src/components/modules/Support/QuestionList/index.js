import React, { memo, useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { locales } from "../../../../i18n/helper";
import i18n from "../../../../i18n/i18n";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import QuestionListItem from "../../../elements/QuestionListItem";
import Loader from "../../Loader";

const QuestionList = memo((props) => {

    const { title, data, onClick } = props

    const [currentHovered, setCurrentHovered] = useState(null);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    return (
        <Container fluid className="my-2 p-4">
            <div className="py-2">
                <Heading heading={title} size={"lg"} bold backgroundColor={colors.white} />
            </div>
            <Row>
                {
                    data ? data.length > 0 ? data.map((item, index) => (
                        <div className="p-0" onMouseOver={() => onHover(index)} onMouseLeave={onLeave}>
                            {
                                index > 0 &&
                                <hr className="mx-2 my-0" style={{ color: currentHovered === index || currentHovered != null && currentHovered + 1 === index ? 'white' : 'lightgray', borderWidth: 2 }} />
                            }
                            <QuestionListItem
                                title={i18n.language === locales.AR ? item.title_ar : item.title}
                                onClick={() => onClick(item.id, title)}
                                icon={currentHovered === index}
                            />
                        </div>
                    )) : <Heading size="md" bold nomargin heading="No Result Found!" />
                        : <Loader type='full-width-min' />
                }
            </Row>
        </Container>
    )
});

export default QuestionList;