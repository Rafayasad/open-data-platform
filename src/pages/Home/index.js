import React, { memo } from "react";
import Navbar from "../../components/elements/Navbar";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import Images from "../../components/modules/Home/Images";
import Main from "../../components/modules/Home/Main";
import PlatformInsights from "../../components/modules/Home/PlatformInsights";
import Topics from "../../components/modules/Home/Topics";

const Home = memo(() => {
    return (
        <>
            {/* <Navbar /> */}
            <Main />
            <Topics />
            <Images />
            <PlatformInsights />
            <UpperFooter title="Get more from Abu Dhabi Data" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Home;