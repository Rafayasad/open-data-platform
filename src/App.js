import './App.css';
import { lazy, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const Home = lazy(() => import('./pages/Home'))
const Dataset = lazy(() => import('./pages/Dataset'))
const About = lazy(() => import('./pages/About'))
const Applications = lazy(() => import('./pages/Applications'))


function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    document.getElementsByTagName('html')[0].setAttribute("dir", i18n.language === "en" ? "ltr" : "rtl")
  }, [i18n.language])
  return (
    <>
      <Home />
      <Dataset />
      <About />
      <Applications />
    </>
  );
}

export default App;
