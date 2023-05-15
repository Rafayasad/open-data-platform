
let BASE_ROUTE = "/opendata";

export const routes = {
  HOME: BASE_ROUTE + "/",
  DATASET: BASE_ROUTE + "/dataset",
  DATASET_DETAIL: BASE_ROUTE + '/dataset/detail',
  SUPPORT: BASE_ROUTE + "/support",
  SUPPORT_QUESTIONS: BASE_ROUTE + '/support/questions',
  SUPPORT_QUESTIONS_DETAIL: BASE_ROUTE + '/support/questions/detail',
  ABOUTUS: BASE_ROUTE + "/about-us",
  APPLICATIONS: BASE_ROUTE + "/applications",
  PUBLISHER: BASE_ROUTE + "/publishers",
  AUTHENTICATION: BASE_ROUTE + "/authentication",
  LOGIN: BASE_ROUTE + `/login`,
  REGISTER: BASE_ROUTE + `/register`,
  RECOVER: BASE_ROUTE + `/recover-password`,
  RESET: BASE_ROUTE + `/reset-password`,
  SUCCESS_STOIRES: BASE_ROUTE + '/success-stories',
  SUCCESS_STOIRES_DETAIL: BASE_ROUTE + '/success-stories/detail',
  CHANGE: BASE_ROUTE + `/change-password`,
  OTP: BASE_ROUTE + `/otp-verification`,
  POLICY: BASE_ROUTE + `/privacy-policy`,
  CONTACT: BASE_ROUTE + `/contact-us`,
  REAL_TIME_APIS: BASE_ROUTE + `/real-time-apis`,
  REAL_TIME_APIS_DETAIL: BASE_ROUTE + `/real-time-apis/detail`,
  REPORTS: BASE_ROUTE + '/reports',
  REPORTS_INSIGHTS: BASE_ROUTE + '/reports/insights',
  REPORTS_PUBLISHERS: BASE_ROUTE + '/reports/publisher',
  REPORTS_DATASETS: BASE_ROUTE + '/reports/dataset',
  CONFIRMATION: BASE_ROUTE + '/confirmation',
  UNAUTHORIZED: BASE_ROUTE + '/unauthorized',
  NOT_FOUND: BASE_ROUTE + '/not-found'
};
