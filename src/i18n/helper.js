// import { useTransition } from 'react';
// import { useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js';

export const string = (string) => i18n.t(string)

export const locales = {
    EN: "en",
    AR: "ar"
}