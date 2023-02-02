import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./helper";

const Home = lazy(() => import('../pages/Home'))
const Dataset = lazy(() => import('../pages/Dataset'))
const About = lazy(() => import('../pages/About'))
const Applications = lazy(() => import('../pages/Applications'))

const Router = () => {
    return (
        <Routes>
            <Route path={routes.HOME} element={<Home />} />
            <Route path={routes.DATASET} element={<Dataset />} />
            <Route path={routes.ABOUTUS} element={<About />} />
            <Route path={routes.APPLICATIONS} element={<Applications />} />
        </Routes>
    )
};

export default Router;