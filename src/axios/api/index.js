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
            console.log()
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