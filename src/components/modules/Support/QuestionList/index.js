import React, { memo, useCallback, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { locales } from "../../../../i18n/helper";
import { colors } from "../../../../utils/colors";
import { useTranslation } from "react-i18next";
import Heading from "../../../elements/Heading";
import QuestionListItem from "../../../elements/QuestionListItem";
import Loader from "../../Loader";

const QuestionList = memo((props) => {

    const { title, data, onClick, titleAr } = props;
    const { t, i18n } = useTranslation();

    const [currentHovered, setCurrentHovered] = useState(null);

    console.log("datttttttttta", data);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])

    return (
        <Container fluid className="my-2 p-4">
            <div className="py-2">
                <Heading heading={i18n.language === locales.AR ? titleAr : title} size={"lg"} bold backgroundColor={colors.white} />
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
                                onClick={() => onClick(item.id, title, titleAr)}
                                icon={currentHovered === index}
                            />
                        </div>
                    )) : <Heading size="md" bold nomargin heading={t("NoResultFound!")} />
                        : <Loader type='full-width-min' />
                }
            </Row>
        </Container>
    )
});

export default QuestionList;