import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
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
const SuccessStories = lazy(() => import('../pages/SuccessStories'))
const SuccessStoriesDetail = lazy(() => import('../pages/SuccessStoriesDetail'))

const Router = () => {
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
            <Route path={routes.SUCCESS_STOIRES} element={<SuccessStories />} />
            <Route path={routes.SUCCESS_STOIRES_DETAIL} element={<SuccessStoriesDetail />} />
        </Routes>
    )
};

export default Router;