import { client } from "../axios"

export const endpoints = {
    getImages: (image) => {
        return client.get(image);
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
    getAllDatasets: (currentPage, rowsPerPage) => {
        return client.get(`/api/1/search/facets?fulltext=&page=${currentPage}&page-size=${rowsPerPage}&sort-order=asce&sort=title&facets=0`);
    },
    getDatasetById: (id) => {
        return client.get(`/api/1/metastore/schemas/dataset/items/${id}`);
    },
    getAllApplications: () => {
        return client.get('/jsonapi/node/applications');
    }
}