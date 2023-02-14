import './App.css';
import React, { useEffect } from 'react';
import Router from './router';
import { useTranslation } from 'react-i18next';
import { locales } from './i18n/helper';

function App() {

  const { i18n } = useTranslation();

  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute("dir", i18n.language === locales.EN ? "ltr" : "rtl")
  }, [i18n.language])

  return <div className={`${i18n.language === locales.AR && "ar-font"}`}>
    <Router />
  </div>

}

export default App;
