import axios from "axios";
import { client } from "../axios"

export const endpoints = {
    getImages: (image) => {
        let url = image.replace('http://', 'https://');
        return client.get(url);
    },
    getPlatformInsights: () => {
        return client.get("/apis/platform_insights-2.php");
    },
    getMostViewedDatasets: () => {
        return client.get("/apis/most_view_datasets-2.php");
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
        return client.get(`/api/1/search/facets?fulltext=${search}&page=${currentPage}&page-size=${rowsPerPage}&sort-order=${sort === 'modified' ? "desc" : "aesc"}&sort=${sort}&facets=0&${filters?.map(item => item.values.length > 0 ? `${item.key + '=' + item.values + "&"}` : "").join("")}`);
    },
    getDatasetById: (id) => {
        return client.get(`/api/1/metastore/schemas/dataset/items/${id}`);
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
        return axios.get('https://data.abudhabi/session/token')
    },
    login: (data, headers) => {
        return axios.post('http://10.241.40.69:30418/user/login?_format=json', data, { headers })
    },
    register: (data, headers) => {
        return axios.post('http://10.241.40.69:30418/apis/register.php', data, { headers })
    },
    getInsightsReport: (data, options) => {
        return axios.post('http://192.168.0.23:82/apis/reports/insight_report.php', data, options)
    },
    getPublishersReport: (data, options) => {
        return axios.post('http://192.168.0.23:82/apis/reports/publishers_report.php', data, options)
    },
    getDatasetsReport: (data, options) => {
        return axios.post('http://192.168.0.23:82/apis/reports/dataset_report.php', data, options)
    },
    getSearch: () => {
        return axios.get('https://data.abudhabi/apis/search.php')
    },
    postSearch: (data) => {
        return axios.post('https://data.abudhabi/apis/search.php', data)
    },
    recoverPassword: (data, headers) => {
        return axios.post('http://192.168.0.188/odp_apis/reset_email.php', data, { headers })
    },
    viewCount: (data) => {
        return axios.post('https://data.abudhabi/apis/view_count.php', data);
    },
    realTimeApis: (data) => {
        return axios.get('https://api.abudhabi.ae/gateway/GardenBooking/3.0/searchFacilities', data);
    }
} 