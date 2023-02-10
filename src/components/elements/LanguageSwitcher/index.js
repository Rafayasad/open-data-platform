import { useTranslation } from 'react-i18next';
import React, { memo } from "react";
import { locales } from '../../../i18n/helper';

const LanguageSwitcher = memo(() => {

    const { i18n } = useTranslation();

    const handler = () => {
        i18n.language === locales.EN ? i18n.changeLanguage(locales.AR) :
            i18n.language === locales.AR && i18n.changeLanguage(locales.EN)
    }

    return (
        <div>
            <p
                style={{ cursor: "pointer" }}
                onClick={handler}
                className='m-0'>{i18n.language === locales.AR ? "english" : "عربى"}
            </p>
        </div>
    )
})

export default LanguageSwitcher;