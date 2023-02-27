import React, { memo } from "react";
import Navbar from '../Navbar';
import UpperFooter from '../Footer/UpperFooter';
import MiddleFooter from '../Footer/MiddleFooter';
import LowerFooter from '../Footer/LowerFooter';

const View = memo((props) => {

    const { nonavbar, noupperfooter, nomiddlefooter, nolowerfooter, children, theme, nocontent, sticky, footerTitle, footerButton, footerDescription } = props;

    return (
        <>
            {
                !nonavbar && <Navbar theme={theme} nocontent={nocontent} sticky={sticky} />
            }
            {
                children
            }
            {
                !noupperfooter && <UpperFooter title={footerTitle} button={footerButton} description={footerDescription} />
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