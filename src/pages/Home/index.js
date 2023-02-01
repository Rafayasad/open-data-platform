import React, { memo } from "react";
import Cards from "../../components/modules/Cards";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import Images from "../../components/modules/Home/Images";
import Main from "../../components/modules/Home/Main";
import PlatformInsights from "../../components/modules/Home/PlatformInsights";
import Topics from "../../components/modules/Home/Topics";

const data = [
    {
        title: "Immunizations by Nationality, Type of Vaccine and Age Group",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "Licensed Social Care Professional 2021 - 2022",
        publisher: "Ministry of Health and Prevention"
    },
    {
        title: "List of applicants for participation in the school bus supervisors",
        publisher: "Telecommunication Regulatory Authority"
    }
]

const Home = memo(() => {
    return (
        <>
            {/* <Navbar /> */}
            <Main />
            <Topics />
            <Images />
            <Cards title="Most Viewed Datasets" backgroundColor={'black'} data={data} />
            <Cards title="Recently Added Datasets" backgroundColor={'black'} data={data} />
            <PlatformInsights />
            <UpperFooter title="Get more from Abu Dhabi Data" />
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default Home;