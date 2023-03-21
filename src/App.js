import './App.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './router';
import { locales } from './i18n/helper';
import { setDatasetsSuggestion, setPublishers, setStoriesTags, setSupportSuggestion, setTags, setTopics } from './redux/reducers/Facets';
import { setAboutus } from './redux/reducers/About';
import { checkUser, getAboutUs, getAllApplications, getFacets, getFaqsCategory, getPopularQuestions, getSearch, getStoriesTags, getSuccessStories } from './axios/api';
import { setApplications } from './redux/reducers/Applications';
import { handleLogin, handleLogout } from './redux/reducers/Authentication';
import { setStories } from './redux/reducers/SuccessStories';
import { setCategories, setQuestions } from './redux/reducers/Support';
import { useSelector } from 'react-redux';

function App() {

  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const storiesFilters = useSelector((state) => state.stories.filters);

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute("dir", i18n.language === locales.EN ? "ltr" : "rtl")
  }, [i18n.language])

  useEffect(() => {
    checkUser(dispatch, handleLogin, handleLogout)
    getAboutUs(dispatch, setAboutus);
    getFacets("theme", "themelear", dispatch, setTopics);
    getFacets("keyword", "keywordlear", dispatch, setTags);
    getFacets("publisher__name", "publisherlear__name", dispatch, setPublishers);
    getAllApplications(dispatch, setApplications);
    getFaqsCategory(dispatch, setCategories);
    getPopularQuestions(dispatch, setQuestions);
    getStoriesTags(dispatch, setStoriesTags);
    getSearch("datasets", dispatch, setDatasetsSuggestion)
    getSearch("support", dispatch, setSupportSuggestion)
  }, []);

  useEffect(() => {
    getSuccessStories(dispatch, setStories, storiesFilters);
  }, [storiesFilters])

  if (process.env.REACT_APP_ENVIORNMENT !== 'dev') {
    console.log = () => { }
  }

  return <div className={`${i18n.language === locales.AR && "ar-font"}`}>
    <Router />
    <ToastContainer />
  </div>

}

export default App;
