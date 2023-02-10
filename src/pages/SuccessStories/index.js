import React, { memo } from "react";
import Cards from "../../components/modules/Cards";
import Header from "../../components/modules/Cards/Header";
import { colors } from "../../utils/colors";
import DemiImage from "../../assets/images/recover-pass-Image.png";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";

const SuccessStories = memo(() => {
    const data = [
        {
            image: DemiImage,
            title: "Immunizations by Nationality, Type of Vaccine and Age Group",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        },
        {
            image: DemiImage,
            title: "Licensed Social Care Professional 2021 - 2022",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        },
        {
            image: DemiImage,
            title: "List of applicants for participation in the school bus supervisors",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        },
        {
            image: DemiImage,
            title: "Immunizations by Nationality, Type of Vaccine and Age Group",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        },
        {
            image: DemiImage,
            title: "Licensed Social Care Professional 2021 - 2022",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        },
        {
            image: DemiImage,
            title: "List of applicants for participation in the school bus supervisors",
            publisher: "Published on 27 August 2022  ·  7-minute read",
            tags: ['Education', 'Education', 'Education']
        }
    ]
    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <Header title={"Success stories"} nobutton backgroundColor={colors.white} />
                <Cards type="story-cards" data={data} />
            </div>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default SuccessStories;