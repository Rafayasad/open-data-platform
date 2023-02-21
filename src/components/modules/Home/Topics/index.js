import React, { memo, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Button from "../../../elements/Button";
import Heading from "../../../elements/Heading";
import ListItem from "../../../elements/ListItem";
import Drone from '../../../../assets/images/TopicDrone.png';
import { useTranslation } from "react-i18next";

const Topics = memo((props) => {

    const { t } = useTranslation()

    const { data, onClickList } = props;

    const [currentHovered, setCurrentHovered] = useState(null);
    const [all, setAll] = useState(false);
    const [selectedListItem, setSelectedListItem] = useState();

    const onHover = useCallback((index) => setCurrentHovered(index), [currentHovered])
    const onLeave = useCallback(() => setCurrentHovered(null), [currentHovered])
    const onClick = useCallback(() => setAll(!all))
    const onClickListItem = useCallback((item) => onClickList(item), [])

    return (
        <Container fluid className="m-0 p-0 bg-black">
            <Row className="py-4 px-2 m-0 d-block d-sm-none">
                <Col>
                    <Heading size='xs' nomargin color={colors.white} heading={t("explore")} />
                </Col>
            </Row>
            {
                data && data.length > 0 && data.slice(0, all ? data.length : 8).map((item, index) => (
                    <div onMouseOver={() => onHover(index)} onMouseLeave={onLeave} >
                        {
                            index > 0 &&
                            <hr className="m-0 mx-4" style={{ color: currentHovered === index || currentHovered != null && currentHovered + 1 === index ? 'black' : 'lightgray', borderWidth: 2 }} />
                        }
                        <ListItem title={item.title} value={item.value} image={currentHovered === index && Drone} onClick={() => onClickListItem(item)} />
                    </div>
                ))
            }
            <Row className="py-3 m-0">
                <Col className="px-4 d-flex justify-content-end">
                    <Button borderColor='white' backgroundColor='black' textColor='white' title={all ? t("viewLess") : t("viewAll")} onClick={onClick} />
                </Col>
            </Row>
        </Container>
    )
})

export default Topics;