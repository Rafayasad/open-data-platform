import React, { memo, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SlShare } from "react-icons/sl";
import StoriesDetails from "../../components/modules/SuccessStories/StoriesDetail";
import demoImage from "../../assets/images/Desktop.png";
import Cards from "../../components/modules/Cards";
import { colors } from "../../utils/colors";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { routes } from "../../router/helper";
import { getSuccessStoriesById } from "../../axios/api";
import BreadCrumb from "../../components/elements/BreadCrumb";
import Button from "../../components/elements/Button";
import Dropdown from "../../components/elements/DropDown";
import View from "../../components/modules/View";
import { shareOptions } from "../../utils";
import { useSelector } from "react-redux";

const SuccessStoriesDetail = memo(() => {

    const { t } = useTranslation();
    const navigate = useNavigate();

    const { search } = useLocation();

    const urlParams = new URLSearchParams(search);

    const id = urlParams.get('id');

    const [story, setStory] = useState();

    const downloadResources = useCallback((links) => { console.log(links) });

    const stories = useSelector(state => state.stories.stories);

    const onClickCard = useCallback((id) => { navigate(`${routes.SUCCESS_STOIRES_DETAIL}?id=${id}`) });
    const onClickButton = useCallback(() => { navigate(routes.SUCCESS_STOIRES) });

    useEffect(() => {

        if (!id) return navigate(routes.SUCCESS_STOIRES, { replace: true });

        getSuccessStoriesById(id, setStory);

    }, [])

    console.log(story);

    const shareOption = shareOptions?.map((item, index) => (
        {
            title: item.title,
            onClick: downloadResources,
            downloadLink: item.downloadURL,
            icon: item.format === "facebook" ? <FaFacebookF />
                : item.format === "linkedin" ? <FaLinkedinIn />
                    : item.format === "twitter" && <FaTwitter />
        }
    ))


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
        <View theme="dark" noupperfooter>
            <div className="my-5 pt-5 px-0">
                <div className="px-4 pt-5 d-flex justify-content-between align-items-center">
                    <div>
                        <BreadCrumb items={[t("aboutus"), t("successStories")]} />
                    </div>
                    <div>
                        <Dropdown
                            width={"100%"}
                            size={"sm"}
                            autoClose={true}
                            options={shareOption}
                            headerComponent={<Button backgroundColor="white" textColor="black" borderColor={colors.black} icon={<SlShare size={20} />} />}
                        />
                    </div>
                </div>
                <div className="px-4">
                    <hr />
                </div>
                <StoriesDetails item={story} />
                <hr className="m-0 mx-3" />
                <Cards noheadercomponent backgroundColor={colors.white} title={t("successStories")} data={stories} size="md" onClick={onClickCard} onClickViewAll={onClickButton} />
            </div>
        </View>

    )
})

export default SuccessStoriesDetail;