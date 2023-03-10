import React, { memo, useEffect, useRef, useState } from "react";
import Modal from "../../../components/elements/Modal/index";
import AuthBackground1 from "../../../assets/images/Auth-Background-1.png";
import Navbar from '../../../components/modules/Navbar'
import useIsFocused from "../../../utils/hooks/useIsFocused";
import View from "../../../components/modules/View";
import { getPrivacyPolicy } from "../../../axios/api";
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";

const PrivacyPolicy = memo(() => {

    const ref1 = useRef(null);
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPrivacyPolicy(setData, setLoading)
    }, [])

    return (
        <>
            <div ref={ref1} className="d-none d-lg-block" style={{ height: "100vh", width: "100vw", backgroundImage: `url(${AuthBackground1})`, backgroundRepeat: "no-repeat", backgroundSize: "100vw 100vh" }}>
                <View nocontent noupperfooter nomiddlefooter nolowerfooter />
            </div>

            <div className="d-block d-lg-none" style={{ height: "100vh", width: "100vw" }}>
                <View nocontent noupperfooter nomiddlefooter nolowerfooter />
            </div>

            <Modal
                loading={loading}
                backdrop={useIsFocused(ref1)}
                title={i18n.language === locales.EN ? data?.title : data?.title_ar}
                description={i18n.language === locales.EN ? data?.description : data?.description_ar}
                size="lg" />
        </>
    )
})

export default PrivacyPolicy;