import React, { memo } from "react";
import { Container } from "react-bootstrap";
import Heading from "../../../elements/Heading";
import Tag from "../../../elements/Tag";

const DataCard = memo((props) => {

    const { data } = props

    return (
        <Container fluid className="p-0">
            {
                data && data.length > 0 && data.map((item, index) => (
                    <div key={index}>
                        <div>
                            <Heading heading={item.title} size='xs' />
                        </div>
                        {
                            !item.tags ? (
                                <div>
                                    <Heading capitalize={item.capitalize} nomargin={data.length - 1 == index} color={item.color} underline={item.underline} heading={item.detail} size='xxs' onClick={item.onClick} />
                                </div>
                            ) : (
                                <div className="d-flex flex-wrap mb-3">
                                    {
                                        item.detail.map((item, index) => (
                                            <div key={index} className="my-1">
                                                <Tag title={item} />
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                ))
            }
        </Container>
    )
});

export default DataCard;