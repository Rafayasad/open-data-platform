import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const Home = lazy(() => import('../pages/Home'))
const Dataset = lazy(() => import('../pages/Dataset'))
const About = lazy(() => import('../pages/About'))
const Applications = lazy(() => import('../pages/Applications'))
const Register = lazy(() => import('../pages/Authentication/Register'))
const Login = lazy(() => import('../pages/Authentication/Login'))
const RecoverPassword = lazy(() => import('../pages/Authentication/RecoverPassword'))
const ResetPassword = lazy(() => import('../pages/Authentication/ResetPassword'))


const Router = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.DATASET} element={<Dataset />} />
            <Route path={routes.ABOUTUS} element={<About />} />
            <Route path={routes.APPLICATIONS} element={<Applications />} />
            <Route path={routes.REGISTER} element={<Register />} />
            <Route path={routes.LOGIN} element={<Login />} />
            <Route path={routes.RECOVER} element={<RecoverPassword />} />
            <Route path={routes.RESET} element={<ResetPassword />} />
        </Routes>
    )
};

export default Router;