import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Shimmer from "../../../elements/Shimmer";
import Tag from "../../../elements/Tag";

const DataCard = memo((props) => {

    const { data } = props

    console.log("data",data);

    return (
        <Container fluid className="p-0">
            {
                data && data.length > 0 && data.map((item, index) => (
                    <div key={index} className="py-1">
                        <div>
                            <Heading heading={item.title} size='xs' bold />
                        </div>
                        {
                            !item.tags ? (
                                <div>
                                    <Heading maxNumberOfLines={0} capitalize={item.capitalize} color={item.color} underline={item.underline} heading={item.detail} size='xxs' onClick={item.onClick} />
                                </div>
                            ) : (
                                <div className="d-flex flex-wrap mb-3">
                                    {
                                        item && item.detail && item.detail.length > 0 ? item.detail.map((value, index) => (
                                            <div key={index} className="my-1">
                                                <Tag
                                                    title={value}
                                                    backgroundColor={item.theme === 'light' && colors.white}
                                                    borderColor={item.theme === 'light' && `1.5px solid ${colors.light_gray}`}
                                                    textColor={item.theme === 'light' && colors.black}
                                                />
                                            </div>
                                        )) : (
                                            <>
                                                <Shimmer rounded='lg' width="25%" height="36px" className={"m-1"} />
                                                <Shimmer rounded='lg' width="40%" height="36px" className={"m-1"} />
                                                {/* <Shimmer rounded='lg' width="30%" height="36px" className={"m-1"} /> */}
                                            </>
                                        )
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