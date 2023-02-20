import './App.css';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import Router from './router';
import { locales } from './i18n/helper';
import { setPublishers, setTags, setTopics } from './redux/reducers/Facets';
import { setAboutus } from './redux/reducers/About';
import { getAboutUs, getAllApplications, getFacets, getFaqsCategory, getPopularQuestions, getSuccessStories } from './axios/api';
import { setApplications } from './redux/reducers/Applications';
import { setStories } from './redux/reducers/SuccessStories';
import { setCategories, setQuestions } from './redux/reducers/Support';

function App() {

  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute("dir", i18n.language === locales.EN ? "ltr" : "rtl")
  }, [i18n.language])

  useEffect(() => {
    getAboutUs(dispatch, setAboutus);
    getFacets("theme", "themelear", dispatch, setTopics);
    getFacets("keyword", "keywordlear", dispatch, setTags);
    getFacets("publisher__name", "publisherlear__name", dispatch, setPublishers);
    getAllApplications(dispatch, setApplications);
    getSuccessStories(dispatch, setStories);
    getFaqsCategory(dispatch, setCategories);
    getPopularQuestions(dispatch, setQuestions);
  }, [])

  return <div className={`${i18n.language === locales.AR && "ar-font"}`}>
    <Router />
  </div>

}

export default App;
