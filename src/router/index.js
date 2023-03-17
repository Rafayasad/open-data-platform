import React, { lazy } from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import RealTimeApisDetail from "../pages/RealTimeApisDetail";
import { routes } from "./helper";

const Home = lazy(() => import('../pages/Home'))
const Dataset = lazy(() => import('../pages/Dataset'))
const DatasetDetail = lazy(() => import('../pages/DatasetDetail'))
const About = lazy(() => import('../pages/About'))
const Applications = lazy(() => import('../pages/Applications'))
const Support = lazy(() => import('../pages/Support'))
const SupportQuestions = lazy(() => import('../pages/SupportQuestions'))
const SupportQuestionsDetail = lazy(() => import('../pages/SupportQuestionsDetail'))
const Register = lazy(() => import('../pages/Authentication/Register'))
const Login = lazy(() => import('../pages/Authentication/Login'))
const RecoverPassword = lazy(() => import('../pages/Authentication/RecoverPassword'))
const ResetPassword = lazy(() => import('../pages/Authentication/ResetPassword'))
const OTP = lazy(() => import('../pages/Authentication/OTP'))
const SuccessStories = lazy(() => import('../pages/SuccessStories'))
const SuccessStoriesDetail = lazy(() => import('../pages/SuccessStoriesDetail'))
const PrivacyPolicy = lazy(() => import('../pages/Authentication/PrivacyPolicy'))
const ChangePassword = lazy(() => import('../pages/Authentication/ChangePassword'))
const ContactUs = lazy(() => import('../pages/ContactUs'))
const RealTimeApis = lazy(() => import('../pages/RealTimeApis'))
const Reports = lazy(() => import('../pages/Reports'))
const InsightsReports = lazy(() => import('../pages/Reports/Insights'))
const PublishersReports = lazy(() => import('../pages/Reports/Publishers'))
const DatasetsReports = lazy(() => import('../pages/Reports/Datasets'))
const Confirmation = lazy(() => import('../pages/Confirmation'))

const Router = () => {

    const { isLoggedIn } = useSelector(state => state.authentication);

    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.DATASET} element={<Dataset />} />
            <Route path={routes.DATASET_DETAIL} element={<DatasetDetail />} />
            <Route path={routes.APPLICATIONS} element={<Applications />} />
            <Route path={routes.SUPPORT} element={<Support />} />
            <Route path={routes.SUPPORT_QUESTIONS} element={<SupportQuestions />} />
            <Route path={routes.SUPPORT_QUESTIONS_DETAIL} element={<SupportQuestionsDetail />} />
            <Route path={routes.ABOUTUS} element={<About />} />
            <Route path={routes.REGISTER} element={<Register />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.RECOVER} element={<RecoverPassword />} />
            <Route path={routes.RESET} element={<ResetPassword />} />
            <Route path={routes.OTP} element={<OTP />} />
            <Route path={routes.SUCCESS_STOIRES} element={<SuccessStories />} />
            <Route path={routes.SUCCESS_STOIRES_DETAIL} element={<SuccessStoriesDetail />} />
            <Route path={routes.POLICY} element={<PrivacyPolicy />} />
            <Route path={routes.CHANGE} element={<ChangePassword />} />
            <Route path={routes.CONTACT} element={<ContactUs />} />
            <Route path={routes.REAL_TIME_APIS} element={<RealTimeApis />} />
            <Route path={routes.REAL_TIME_APIS_DETAIL} element={<RealTimeApisDetail />} />
            <Route path={routes.CONFIRMATION} element={<Confirmation />} />
            {
                isLoggedIn &&
                <Fragment>
                    <Route path={routes.REPORTS} element={<Reports />} />
                    <Route path={routes.REPORTS_INSIGHTS} element={<InsightsReports />} />
                    <Route path={routes.REPORTS_PUBLISHERS} element={<PublishersReports />} />
                    <Route path={routes.REPORTS_DATASETS} element={<DatasetsReports />} />
                </Fragment>
            }
        </Routes>
    )
};

export default Router;