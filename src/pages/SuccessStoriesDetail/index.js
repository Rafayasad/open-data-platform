import React, { memo } from "react";
import StoriesDetails from "../../components/modules/SuccessStories/StoriesDetail";
import demoImage from "../../assets/images/Desktop.png";
import Cards from "../../components/modules/Cards";
import { colors } from "../../utils/colors";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from "../../components/modules/Footer/LowerFooter";
import Navbar from "../../components/modules/Navbar";

const SuccessStoriesDetail = memo(() => {
    const data = [
        {
            publisher: "ABU DHABI POLICE",
            title: "Value proposition of the service or product",
            short_description: "High level description of an idea, service or product by emphasising how entrepreuners, companies benefit from ADDA",
            publish_date: "Published on 27 August 2022  ·  7-minute read",
            image: demoImage,
            para_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            second_title: "Finibus Bonorum et Malorum",
            second_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            third_title: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            secondImage: demoImage,
            third_description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
            tags: ["Education", "Education", "Education"]
        }
    ]
    const datas = [
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
    return (
        <>
            <Navbar theme='dark' />
            <div className="my-5 pt-5">
                <StoriesDetails data={data} />
                <hr className="m-0 mx-3" />
                <Cards title="Success stories" backgroundColor={colors.white} data={datas} />
            </div>
            <MiddleFooter />
            <LowerFooter />
        </>
    )
})

export default SuccessStoriesDetail;