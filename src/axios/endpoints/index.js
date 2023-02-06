import { client } from "../axios"

export const endpoints = {
    getPlatformInsights: () => {
        return client.get("/apis/platform_insights-2.php");
    },
    getMostViewedDatasets: () => {
        return client.get("/apis/most_view_datasets-2.php");
    },
    getRecentsDatasets: () => {
        return client.get("/apis/recently_added_datasets-2.php");
    },
    getFacets: (key) => {
        return client.get(`/api/1/search/facets?fulltext=&page=1&page-size=10&sort=modified&sort-order=desc&facets=${key}`);
    },
}