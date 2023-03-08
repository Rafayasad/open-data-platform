import React from "react";
import { memo } from "react";
import { Col } from "react-bootstrap";
import BreadCrumb from "../../../elements/BreadCrumb";
import Heading from "../../../elements/Heading";
import { useTranslation } from "react-i18next";

const RealTimeApisHeader = memo((props) => {

    const { t } = useTranslation();

    return (
        <div className="my-5 pt-5">
            <div className="px-4 pt-5">
                <BreadCrumb items={[t("applications"), t("realTimeAPI")]} />
            </div>
            <div className="p-4 row">
                <Col className="" lg={6}>
                    <Heading size={"xl"} heading={t("openData")} bold />
                </Col>
            </div>
            <div className="px-4 row">
                <Col className="" lg={6}>
                    <Heading heading={t("openDataDescription")} size={"xxs"} />
                </Col>
            </div>
        </div>
    )
})

export default RealTimeApisHeader;