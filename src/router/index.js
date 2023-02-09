import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const Home = lazy(() => import('../pages/Home'))
const Dataset = lazy(() => import('../pages/Dataset'))
const About = lazy(() => import('../pages/About'))
const Applications = lazy(() => import('../pages/Applications'))
const Support = lazy(() => import('../pages/Support'))
const Register = lazy(() => import('../pages/Authentication/Register'))
const Login = lazy(() => import('../pages/Authentication/Login'))
const RecoverPassword = lazy(() => import('../pages/Authentication/RecoverPassword'))
const ResetPassword = lazy(() => import('../pages/Authentication/ResetPassword'))
const PrivacyPolicy = lazy(() => import('../pages/Authentication/PrivacyPolicy'))
const ChangePassword= lazy(() => import('../pages/Authentication/ChangePassword'))

const Router = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.DATASET} element={<Dataset />} />
            <Route path={routes.APPLICATIONS} element={<Applications />} />
            <Route path={routes.SUPPORT} element={<Support />} />
            <Route path={routes.ABOUTUS} element={<About />} />
            <Route path={routes.REGISTER} element={<Register />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.RECOVER} element={<RecoverPassword />} />
            <Route path={routes.RESET} element={<ResetPassword />} />
            <Route path={routes.POLICY} element={<PrivacyPolicy />} />
            <Route path={routes.CHANGE} element={<ChangePassword />} />
        </Routes>
    )
};

export default Router;