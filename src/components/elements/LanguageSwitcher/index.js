import { useTranslation } from 'react-i18next';
import React, { memo } from "react";

const LanguageSwitcher = memo(() => {

    const { i18n } = useTranslation();

    const handler = () => {
        i18n.language === "en" ? i18n.changeLanguage("ar") :
            i18n.language === "ar" && i18n.changeLanguage("en")
    }

    return (
        <div>
            <p
                style={{ cursor: "pointer" }}
                onClick={handler}
                className=''>{i18n.language === "en" ? "عربى" : "english"}
            </p>
        </div>
    )
})

export default LanguageSwitcher;