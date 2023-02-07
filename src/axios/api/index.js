import { endpoints } from "../endpoints"

export const getPlatformInsights = (setData, setLoading) => {
    return endpoints.
        getPlatformInsights().then((res) => {
            if (res.status === 200) {
                setData(res.data.data)
                setLoading(false)
            }
        }).catch((err) => {
            console.log()
        })
}

export const getMostViewedDatasets = (setData, setLoading) => {
    return endpoints.
        getMostViewedDatasets().then((res) => {
            if (res.status === 200) {
                let data = res.data.data;
                let transform = data.en.map(item => {

                    let index = data.ar.findIndex(itm => itm.identifier === item.identifier);
                    let ar_obj = {
                        ...data.ar[index]
                    }

                    ar_obj.publisher_ar = ar_obj.publisherlear
                    ar_obj.title_ar = ar_obj.titlear
                    ar_obj.tags_ar = ar_obj.themelear

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlear
                    delete ar_obj.themelear

                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        ...ar_obj
                    }
                })

                setData(transform.slice(0, 3))
                setLoading(false)
            }
        }).catch((err) => {
            console.log()
        })
}

export const getRecentsDatasets = (setData, setLoading) => {
    return endpoints.
        getRecentsDatasets().then((res) => {
            if (res.status === 200) {
                let data = res.data.data;

                let transform = data.en.map(item => {

                    let index = data.ar.findIndex(itm => itm.identifier === item.identifier);
                    let ar_obj = {
                        ...data.ar[index]
                    }

                    ar_obj.publisher_ar = ar_obj.publisherlear
                    ar_obj.title_ar = ar_obj.titlear
                    ar_obj.tags_ar = ar_obj.themelear

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlear
                    delete ar_obj.themelear

                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        ...ar_obj
                    }
                })

                setData(transform.slice(0, 3))
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getSimilarDatasets = (topic, setData, setLoading) => {
    return endpoints.
        getSimilarDatasets(topic).then((res) => {
            if (res.status === 200) {
                let data = res.data.data;

                let transform = data.en.map(item => {

                    let index = data.ar.findIndex(itm => itm.identifier === item.identifier);
                    let ar_obj = {
                        ...data.ar[index]
                    }

                    ar_obj.publisher_ar = ar_obj.publisherlear
                    ar_obj.title_ar = ar_obj.titlear
                    ar_obj.tags_ar = ar_obj.themelear

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlear
                    delete ar_obj.themelear

                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        ...ar_obj
                    }
                })

                setData(transform.slice(0, 3))
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getFacets = (key, setData) => {
    return endpoints.
        getFacets(key).then((res) => {
            if (res.status === 200) {

                let transform = res.data.facets.map(item => ({
                    title: item.name,
                    value: item.total
                }))

                setData(transform)

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getAllDatasets = (setData, setTotalCount, currentPage, rowsPerPage) => {
    return endpoints.
        getAllDatasets(currentPage, rowsPerPage).then((res) => {
            if (res.status === 200) {

                setTotalCount(res.data.total)

                let arr = []

                arr = Object.values(res.data.results).map(item => (
                    {
                        id: item.identifier,
                        title: item.title,
                        title_ar: item.titlear,
                        description: item.description,
                        description_ar: item.descriptionlear,
                        publisher: item.publisher.name,
                        publisher_ar: item.publisherlear.name,
                        tags: item.theme,
                        tags_ar: item.themelear
                    }
                ))

                setData(arr)

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getDatasetById = (id, setData) => {
    return endpoints.
        getDatasetById(id).then((res) => {
            if (res.status === 200) {

                let item = res.data;

                let data = {
                    id: item.identifier,
                    title: item.title,
                    title_ar: item.titlear,
                    description: item.description,
                    description_ar: item.description_ar,
                    publisher: item.publisher.name,
                    publisher_ar: item.publisherlear.name,
                    frequency: item.accrualPeriodicity === "R/P1Y" ? "Annual" : item.accrualPeriodicity === "auto/freq" ? "Automated" : "None",
                    frequency_ar: item.accrualPeriodicity === "R/P1Y" ? "Annual" : item.accrualPeriodicity === "auto/freq" ? "Automated" : "None",
                    access_level: item.accessLevel,
                    access_level_ar: item.accessLevellear,
                    license: item.license,
                    license_ar: item.licenselear,
                    topics: item.theme,
                    topics_ar: item.themelear,
                    tags: item.keyword,
                    tags_ar: item.keywordlear,
                    resources: item.distribution.map(item => (
                        {
                            title: item.title,
                            description: item.description,
                            format: item.format,
                            downloadURL: item.downloadURL
                        }
                    )),
                    resources_ar: item.distribution.map(item => (
                        {
                            title: item.titlelear,
                            description: item.descriptionlear,
                            format: item.format,
                            downloadURL: item.downloadURL
                        }
                    )),
                    created: item.issued,
                    modified: item.modified,
                }

                setData(data)

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getAllApplications = (setData) => {
    return endpoints.
        getAllApplications().then(async(res) => {
            if (res.status === 200) {

                let data = res.data.data

                let applications = [];

                await Promise.all(data.map(item => {

                    let { title, field_title_ar, field_application_description, field_application_description_ar, field_application_url } = item.attributes

                    return endpoints.getImages(item.relationships.field_image.links.related.href)
                        .then((res) => {
                            applications.push({
                                title,
                                title_ar: field_title_ar,
                                description: field_application_description,
                                description_ar: field_application_description_ar,
                                image: `${process.env.REACT_APP_BASE_URL}${res.data.data.attributes.uri.url}`,
                                applicationURL: field_application_url.title
                            })
                        }).catch((err) => {
                            console.log("Error Message While Getting Image", err)
                        })

                }));

                setData(applications)

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}