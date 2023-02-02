import './App.css';
import { lazy, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { locales } from './i18n/helper';

const Home = lazy(() => import('./pages/Home'))

function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute("dir", i18n.language === locales.EN ? "ltr" : "rtl")
  }, [i18n.language])
  return (
    <Home />
  );
}

export default App;
