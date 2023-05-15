import React, { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getAllApplications } from "../../axios/api";
import Pagination from "../../components/elements/Pagination";
import Main from "../../components/modules/Applications/Main";
import Cards from "../../components/modules/Cards";
import Navbar from '../../components/modules/Navbar';
import UpperFooter from "../../components/modules/Footer/UpperFooter";
import MiddleFooter from "../../components/modules/Footer/MiddleFooter";
import LowerFooter from '../../components/modules/Footer/LowerFooter';
import { useSelector } from "react-redux";
import View from "../../components/modules/View";

const Publisher = memo(() => {

    const { t } = useTranslation()

    const demo_data = [
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        },
        {
            applicationURL: "https://enviroportal.ead.ae/map/",
            description: "The Environment - Abu Dhabi (EAD) was established in 1996. EAD is a government entity responsible for protecting and enhancing the environment by reducing pollution and protecting and enhancing our biodiversity. It does this through science, research, policy regulation, environmental education and awareness. EAD has a powerful and dynamic geospatial environmental database which supports its projects as well as government initiatives. The Agency adopts the latest technologies for the management of spatial data. ESRI technologies were used in the construction of this geo-portal to disseminate environmental data and information with our partners and the public.",
            description_ar: "الجيومكانيةتأسست هيئة البيئة - أبو ظبي في عام 1996. هيئة البيئة هي الجهة الحكومية المسئولة عن حماية البيئة عن طريق تقليل التلوث، وحماية وتعزيز التنوع البيولوجي، من خلال إجراء الدارسات والبحوث، ووضع القوانين واللوائح وتنفيذ برامج التعليم والتوعية البيئية تمتلك هيئة البيئة قاعدة قوية وحيوية من البيانات البيئية تستخدم لدعم كافة مشاريعها ومبادراتها الحكومية. كما تعتمد الهيئة على أحدث التقنيات لإدارة البيانات المكانية منها تقنيات مؤسسة ازري التي استخدمت في بناء هذه البوابة الجغرافية لنشر وتبادل البيانات والمعلومات البيئية مع شركاء الهيئة والجمهو",
            id: "fd68bb1f-a15c-4df0-87c1-1a9ee3ba9e6a",
            image: "https://data.abudhabi/opendata/sites/default/files/2023-03/EADlogo%20%282%29.png",
            title: "The Environment GeoSpatial Portal",
            title_ar: "البوابة الإلكترونية البيئية",
            viewDatasets: 43
        }
    ]


    // const applications = useSelector(state => state.application.applications)
    const cardsDiv = document.getElementById("cards");

    const [displayPublishers, setDisplayPublishers] = useState();

    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(9);

    useEffect(() => {
        if (demo_data) {
            let arr = [...demo_data]
            let x = arr.slice(0, rowsPerPage)
            setDisplayPublishers(x)
        }
    }, [])

    const onChangePage = useCallback((page) => {

        if (page) {
            let start = (page - 1) * rowsPerPage
            let end = (start + rowsPerPage)

            let arr = [...demo_data]
            let x = arr.slice(start, end);
            setDisplayPublishers(x);
            setCurrentPage(page)
        }

    }, [currentPage, displayPublishers])

    console.log("====>", displayPublishers);

    // const onClickCard = useCallback((id) => {

    //     if (id) {

    //         let app = applications.find(item => item.id === id)

    //         window.open(app.applicationURL, '_blank')

    //     }

    // })

    return (
        <div style={{ maxWidth: "1800px", margin: "auto" }}>
            <View theme="dark" footerTitle={t("GetMore")} footerButton={t("registerNow")}>
                <div className="my-5 pt-5">
                    <Main title={t("publishers")} description={t("publishersDiscription")} />
                    <div className="my-5" id="cards">
                        <Cards type="image-outer-text" data={displayPublishers}
                        // onClick={onClickCard}
                        />
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={Math.ceil(demo_data?.length / rowsPerPage)}
                        onChange={(page) => {
                            cardsDiv.scrollIntoView(true)
                            onChangePage(page)
                        }}
                    />
                </div>
            </View>
        </div>
    )
})

export default Publisher;