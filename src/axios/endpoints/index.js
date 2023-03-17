import axios from "axios";
import { client } from "../axios"

export const endpoints = {
    getImages: (image) => {
        if (process.env.REACT_APP_ENVIORNMENT === 'dev') {
            return client.get(image);
        }

        let url = image.replace('http://', 'https://');
        return client.get(url);
    },
    getPlatformInsights: () => {
        return client.get("/apis/platform_insights-2.php");
    },
    getMostViewedDatasets: (perPage, pageNumber) => {
        return client.get(`/apis/most_view_datasets-2.php?perpage=${perPage}&pagenumber=${pageNumber}`);
    },
    getRecentsDatasets: () => {
        return client.get("/apis/recently_added_datasets-2.php");
    },
    getSimilarDatasets: (topic) => {
        return client.get(`/apis/similar_dataset.php?type=similar&topic=${topic}`);
    },
    getFacets: (key) => {
        return client.get(`/api/1/search/facets?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=${key}`);
    },
    getAllDatasets: (search, sort, currentPage, rowsPerPage, filters) => {
        return client.get(`/api/1/search?fulltext=${search}&page=${currentPage}&page-size=${rowsPerPage}&sort-order=${sort === 'modified' ? "desc" : "aesc"}&sort=${sort}&facets=0&${filters?.map(item => item.values.length > 0 ? `${item.key + '=' + item.values + "&"}` : "").join("")}`);
    },
    getDatasetById: (id) => {
        return client.get(`/api/1/metastore/schemas/dataset/items/${id}?show-reference-ids`);
    },
    getAllApplications: () => {
        return client.get('/jsonapi/node/applications');
    },
    getAboutUs: () => {
        return client.get('/jsonapi/about_us');
    },
    getFaqsCategory: () => {
        return client.get('/jsonapi/taxonomy_term/faqs_category');
    },
    getQuestionByCategories: () => {
        return client.get(`/jsonapi/node/faqs`)
    },
    getPopularQuestions: () => {
        return client.get('/jsonapi/node/faqs');
    },
    getQuestionBySearch: (text) => {
        return client.get(`/jsonapi/node/faqs?filter[title][operator]=CONTAINS&filter[title][value]=${text}`);
    },
    getQuestionById: (id) => {
        return client.get(`/jsonapi/node/faqs/${id}`)
    },
    getSuccessStories: () => {
        return client.get('/jsonapi/node/stories')
    },
    getSuccessStoriesById: (id) => {
        return client.get(`/jsonapi/node/stories?filter[id]=${id}`)
    },
    getCRSFToken: () => {
        return client.get('/session/token')
    },
    login: (data, headers) => {
        return client.post('/user/login?_format=json', data, { headers })
    },
    validateUser: (data) => {
        return client.post('/validate_user.php', data)
    },
    otp: (data) => {
        return client.post('/apis/otp.php', data)
    },
    register: (data, headers) => {
        return client.post('/apis/register.php', data, { headers })
    },
    getInsightsReport: (data, options) => {
        return client.post('/apis/reports/insight_report.php', data, options)
    },
    getPublishersReport: (data, options) => {
        return client.post('/apis/reports/publishers_report.php', data, options)
    },
    getDatasetsReport: (data, options) => {
        return client.post('/apis/reports/dataset_report.php', data, options)
    },
    getSearch: (data) => {
        return client.get(`/apis/search.php?type=${data}`)
    },
    postSearch: (data) => {
        return client.post(`/apis/search.php`, data)
    },
    recoverPassword: (data, headers) => {
        return client.post('/apis/reset_email.php', data, { headers })
    },
    resetPassword: (data, headers) => {
        return client.post('/xwordxssapx.php', data, { headers })
    },
    viewCount: (data) => {
        return client.post('/apis/view_count.php', data);
    },
    realTimeApis: (data) => {
        return client.get('/jsonapi/node/real_time_apis', data);
    },
    getPrivacyPolicy: () => {
        return client.get("/jsonapi/node/privacy_policy");
    },
    contactUs: (data) => {
        return client.post("/apis/contact.php", data);
    },
    checkUser: () => {
        return client.get('/checkuser')
    },
    logout: () => {
        return client.get('/user/logout')
    },
    getIpAddress: () => {
        return axios.get("https://api.db-ip.com/v2/free/self");
    },
    getStoriesTags: () => {
        return client.get("/jsonapi/taxonomy_term/story_tags");
    }
} 