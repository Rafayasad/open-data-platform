import React, { memo, useEffect, useRef, useState } from "react";
import Modal from "../../../components/elements/Modal/index";
import AuthBackground1 from "../../../assets/images/Auth-Background-1.jpg";
import Navbar from '../../../components/modules/Navbar'
import useIsFocused from "../../../utils/hooks/useIsFocused";
import View from "../../../components/modules/View";
import { getPrivacyPolicy } from "../../../axios/api";
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = memo(() => {

    const { state } = useLocation();

    const { t } = useTranslation();

    const ref1 = useRef(null);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPrivacyPolicy(setData, setLoading)

    }, [i18n.language])

    return (
        <>
            <div ref={ref1} className="d-none d-lg-block" style={{
                height: "100vh", width: "100vw",
                backgroundImage: `url(${AuthBackground1})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh"
            }}>
                <View nocontent noupperfooter nomiddlefooter nolowerfooter />
            </div>

            <div className="d-block d-lg-none py-5" style={{ height: "100%", width: "100%" }}>
                <View theme={"dark"} nolanguageswitcher nocontent noupperfooter nomiddlefooter nolowerfooter />
            </div>

            <Modal
                loading={loading}
                backdrop={useIsFocused(ref1)}
                title={i18n.language === locales.EN ? data?.title : data?.title_ar}
                description={i18n.language === locales.EN ? data?.description : data?.description_ar}
                size="lg"
            />
        </>
    )
})

export default PrivacyPolicy;