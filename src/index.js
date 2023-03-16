import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './i18n/i18n.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import i18n from './i18n/i18n.js';
import { locales } from './i18n/helper';
import ScrollToTop from './router/ScrollToTop';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "muiltr",
});

const THEME = createTheme({
  direction: i18n.language === locales.AR ? "rtl" : "ltr",
  typography: {
    "fontFamily": `${i18n.language === locales.EN ? 'CircularAr-Regular' : 'CircularStd-Regular'}`
  }
});

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Suspense>
        <CacheProvider value={i18n.language === locales.AR ? cacheRtl : emptyCache}>
          <ThemeProvider theme={THEME}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <App />
              </PersistGate>
            </Provider>
          </ThemeProvider>
        </CacheProvider>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
