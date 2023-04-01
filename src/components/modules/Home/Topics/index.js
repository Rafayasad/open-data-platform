import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";
import ListItem from "../../../elements/ListItem";
import Drone from '../../../../assets/images/TopicDrone.png';
import Agriculture from '../../../../assets/images/topics/Agriculture.jpg';
import Business from '../../../../assets/images/topics/Business.jpg';
import Education from '../../../../assets/images/topics/Education.jpg';
import Energy from '../../../../assets/images/topics/Energy.jpg';
import Enviroment from '../../../../assets/images/topics/Enviroment.jpg';
import Society from '../../../../assets/images/topics/Society.jpg';
import Technology from '../../../../assets/images/topics/Technology.jpg';
import Transport from '../../../../assets/images/topics/Transport.jpg';

const Topics = memo((props) => {

    const { t } = useTranslation()

    const { data, onClickList, onClickViewless } = props;

    const [currentHovered, setCurrentHovered] = useState(null);
    const [all, setAll] = useState(false);

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])
    const onClick = useCallback(() => {
        setAll(!all)
        all && onClickViewless()
    })
    const onClickListItem = useCallback((item) => onClickList(item), [])

    const renderList = (viewport) => (
        data && data.length > 0 && data.slice(0, all ? data.length : viewport === "lg" ? 8 : 5).map((item, index) => (
            <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave} >
                {
                    index > 0 &&
                    <hr className="m-0 mx-4" style={{ color: currentHovered === index || currentHovered != null && currentHovered + 1 === index ? 'black' : 'lightgray', borderWidth: 2 }} />
                }
                <ListItem
                    title={item.title}
                    value={item.value}
                    image={currentHovered === index && (
                        item.title === "Agriculture" || item.title === "الزراعة" ? Agriculture :
                            item.title === "Business" || item.title === "الاعمال" ? Business :
                                item.title === "Education" || item.title === "التعليم" ? Education :
                                    item.title === "Energy" || item.title === "الطاقة" ? Energy :
                                        item.title === "Environment" || item.title === "البيئة" ? Enviroment :
                                            item.title === "Society" || item.title === "المجتمع" ? Society :
                                                item.title === "Technology" || item.title === "التكنولوجيا" ? Technology :
                                                    item.title === "Transport" || item.title === "المواصلات" ? Transport : Drone
                    )}
                    onClick={() => onClickListItem(item)}
                />
            </div>
        ))
    )

    return (
        <Container fluid className="m-0 p-0 bg-black">
            <Row className="py-4 px-2 m-0 d-block d-sm-none">
                <Col>
                    <Heading size='xs' nomargin color={colors.white} heading={t("explore")} />
                </Col>
            </Row>
            <div className="d-block d-lg-none">
                {renderList("sm")}
            </div>
            <div className="d-none d-lg-block">
                {renderList("lg")}
            </div>
            <Row className="py-3 m-0">
                <Col className={`px-4 d-flex justify-content-center justify-content-lg-end`}>
                    <Button borderColor='white' backgroundColor='black' textColor='white' title={all ? t("viewLess") : t("viewAll")}
                        onClick={onClick} />
                </Col>
            </Row>
        </Container>
    )
})

export default Topics;