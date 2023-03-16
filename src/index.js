import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import './i18n/i18n.js';
import { ThemeProvider, createMuiTheme } from '@mui/material/styles';
import i18n from './i18n/i18n.js';
import { locales } from './i18n/helper';
import ScrollToTop from './router/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));

const THEME = createMuiTheme({
  direction:"rtl",
  typography: {
    "fontFamily": `${i18n.language === locales.EN ? 'CircularAr-Regular' : 'CircularStd-Regular'}`
  }
});

root.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Suspense>
        <ThemeProvider theme={THEME}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </Suspense>
    </Router>
  </React.StrictMode>
);

// document.getElementsByTagName('html')[0].setAttribute("dir", "ltr");
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
