import React, { memo } from "react";
import Navbar from '../Navbar';
import UpperFooter from '../Footer/UpperFooter';
import MiddleFooter from '../Footer/MiddleFooter';
import LowerFooter from '../Footer/LowerFooter';
import i18n from "../../../i18n/i18n";
import { locales } from "../../../i18n/helper";

const View = memo((props) => {

    const { footerImage, onClickFooterButton, nolanguageswitcher, nonavbar, noupperfooter, nomiddlefooter, nolowerfooter, children, theme, nocontent, sticky, footerTitle, footerButton, footerDescription } = props;

    return (
        <>
            {
                !nonavbar && <Navbar nolanguageswitcher={nolanguageswitcher} theme={theme} nocontent={nocontent} sticky={sticky} />
            }
            {
                children
            }
            {
                !noupperfooter && <UpperFooter image={footerImage} navigateTo={onClickFooterButton} title={footerTitle} button={footerButton} description={footerDescription} />
            }
            {
                !nomiddlefooter && <MiddleFooter />
            }
            {
                !nolowerfooter && <LowerFooter />
            }
        </>
    )
});

export default View;