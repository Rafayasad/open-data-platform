import React, { memo } from "react";
import { Container } from "react-bootstrap";
import { colors } from "../../../../utils/colors";
import Heading from "../../../elements/Heading";
import Shimmer from "../../../elements/Shimmer";
import Tag from "../../../elements/Tag";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../router/helper";
import { locales } from "../../../../i18n/helper";
import { useTranslation } from "react-i18next";

const DataCard = memo((props) => {

    const { data } = props;
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

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
                                <div className="">
                                    <Heading capitalize={item.capitalize} color={item.color} underline={item.underline} heading={item.detail} size='xxs' onClick={item.onClick} />
                                </div>
                            ) : (
                                <div className="d-flex flex-wrap mb-3">
                                    {
                                        item && item.detail && item.detail.length > 0 ? item.detail.map((value, index) => (
                                            <div key={index} className="my-1">
                                                <Tag
                                                    onClick={() => {
                                                        navigate(routes.DATASET, {
                                                            replace: true, state: {
                                                                listItem: [{
                                                                    title: value,
                                                                    type: i18n.language === locales.AR ? item.title === t("tags") ? "keywordlear" : "themelear" : item.title === t("tags") ? "keyword" : "theme"
                                                                }]
                                                            }
                                                        })
                                                    }}
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