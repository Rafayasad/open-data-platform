import { convertHtmlToString } from "../../utils"
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

export const getFacets = async (key_en, key_ar, dispatch, setData) => {

    let en = await endpoints.
        getFacets(key_en).then((res) => {

            if (res.status === 200) {

                let transform = res.data.facets.map(item => ({
                    title: item.name,
                    value: item.total,
                    type: item.type
                }))

                return transform

            }

        }).catch((err) => {
            console.log("Error message", err)
        })

    let ar = await endpoints.
        getFacets(key_ar).then((res) => {
            if (res.status === 200) {

                let transform = res.data.facets.map(item => ({
                    title: item.name,
                    value: item.total,
                    type: item.type
                }))

                return transform

            }
        }).catch((err) => {
            console.log("Error message", err)
        })

    let facets = { en, ar }

    dispatch && dispatch(setData(facets))

}

export const getAllDatasets = (setData, setTotalCount, setLoading, search, sort, currentPage, rowsPerPage, filters) => {

    setLoading(true)
    setTotalCount(0)

    console.log("FILTERS", filters);
    let finalFilters = []
    let themeArray = []
    let publisherArray = []
    let tagsArray = []
    filters?.filter((el, index) => {
        el.type == "theme" ? themeArray.push(el.title)
            : el.type == "publisher__name" ? publisherArray.push(el.title)
                : el.type == "keyword" && tagsArray.push(el.title)
    })
    finalFilters.push(
        { key: "theme", values: themeArray },
        { key: "publisher__name", values: publisherArray },
        { key: "keyword", values: tagsArray }
    )

    return endpoints.
        getAllDatasets(search, sort, currentPage, rowsPerPage, finalFilters).then((res) => {
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
                        publisher: item.publisher?.name,
                        publisher_ar: item.publisherlear?.name,
                        tags: item.theme,
                        tags_ar: item.themelear
                    }
                ))

                setLoading(false)
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
                    publisher: item.publisher?.name,
                    publisher_ar: item.publisherlear?.name,
                    frequency: item.accrualPeriodicity === "R/P1Y" ? "Annual" : item.accrualPeriodicity === "auto/freq" ? "Automated" : "None",
                    frequency_ar: item.accrualPeriodicity === "R/P1Y" ? "سنوي" : item.accrualPeriodicity === "auto/freq" ? "تلقائي" : "لا يوجد",
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

export const getAllApplications = (dispatch, setData) => {
    return endpoints.
        getAllApplications().then(async (res) => {
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

                dispatch && dispatch(setData(applications));

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getAboutUs = (dispatch, setData) => {
    return endpoints.
        getAboutUs().then(async (res) => {
            if (res.status === 200) {

                let data = res.data.data

                let arr;

                arr = await Promise.all(

                    data.map(async (item) => {

                        let { title, field_lqb, body, field_wsf } = item.attributes

                        let obj = {
                            title,
                            title_ar: field_lqb,
                            description: body,
                            description_ar: field_wsf
                        }

                        let image = await endpoints.getImages(item.relationships.field_image.links.related.href)
                            .then((res) => {
                                if (res.status === 200) {
                                    return `${process.env.REACT_APP_BASE_URL}${res.data.data.attributes.uri.url}`
                                }
                            }).catch((err) => {
                                console.log("Error Message While Getting Image", err)
                            })

                        obj.image = image

                        let rows = await endpoints.getImages(item.relationships.field_rows.links.related.href)
                            .then(async (res) => {
                                if (res.status === 200) {

                                    let data = res.data.data

                                    let rows = await Promise.all(
                                        data.map(async (item) => {

                                            let { field_title, field_title_ar, field_description, field_description_ar } = item.attributes

                                            let obj = {
                                                title: field_title,
                                                title_ar: field_title_ar,
                                                description: field_description,
                                                description_ar: field_description_ar
                                            }

                                            let image = await endpoints.getImages(item.relationships.field_image.links.related.href)
                                                .then((res) => {
                                                    if (res.status === 200) {
                                                        return `${process.env.REACT_APP_BASE_URL}${res.data.data.attributes.uri.url}`
                                                    }
                                                }).catch((err) => {
                                                    console.log("Error Message While Getting Image", err)
                                                })

                                            obj.image = image

                                            return obj;
                                        })
                                    )

                                    return rows;
                                }
                            }).catch((err) => {
                                console.log("Error Message While Getting Rows", err)
                            })

                        obj.rows = rows

                        return obj;

                    })
                )

                dispatch && dispatch(setData(arr))

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getFaqsCategory = async (dispatch, setData) => {

    let en = await endpoints.getEnFaqsCategory().then((res) => {

        let categories = []

        if (res.status === 200) {

            let data = res.data.data;

            data.map((item) => {

                const id = item.id
                const { name, description } = item.attributes;

                let obj = {
                    id,
                    title: name,
                    description: convertHtmlToString(description.value)
                }

                categories.push(obj)

            })
        }

        return categories

    })

    let ar = await endpoints.getArFaqsCategory().then((res) => {

        let categories = []

        if (res.status === 200) {

            let data = res.data.data;

            data.map((item) => {

                const id = item.id
                const { name, description } = item.attributes;

                let obj = {
                    id,
                    title: name,
                    description: convertHtmlToString(description.value)
                }

                categories.push(obj)

            })
        }

        return categories

    })

    let categories = { en, ar }

    dispatch && dispatch(setData(categories))

}

export const getPopularQuestions = (dispatch, setData) => {
    return endpoints.
        getPopularQuestions().then((res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let popularQuestions = []

                data.map(item => {

                    const id = item.id
                    const { title, field_question_ar, field_popular_faqs } = item.attributes;

                    if (field_popular_faqs == "Yes") {

                        popularQuestions.push({
                            id,
                            title,
                            title_ar: field_question_ar
                        })

                        return;
                    }

                })

                dispatch && dispatch(setData(popularQuestions))

            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const getQuestionById = (id, setData) => {
    return endpoints.
        getQuestionById(id).then((res) => {
            if (res.status === 200) {

                let { title, field_question_ar, field_answer, field_answer_ar } = res.data.data.attributes;

                let detail = {
                    title,
                    title_ar: field_question_ar,
                    description: field_answer,
                    description_ar: field_answer_ar
                }

                setData(detail)

            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getSuccessStories = (dispatch, setData) => {
    return endpoints.
        getSuccessStories().then(async (res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let stories = await Promise.all(data.map(async item => {

                    let { id, attributes, relationships } = item;
                    let { title, titlear, short_description, short_descriptionar, created } = attributes;
                    let { banner, story_paragraph, story_tags, story_tagsar } = relationships;

                    console.log("asa", attributes)

                    let image = await endpoints.getImages(banner.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let image = res.data.data.attributes.uri.url

                            return `${process.env.REACT_APP_BASE_URL}${image}`;

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.name

                            return [tag]

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags_ar = await endpoints.getImages(story_tagsar.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.name

                            return [tag]

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    return {
                        id,
                        title,
                        title_ar: titlear,
                        description: short_description,
                        description_ar: short_descriptionar,
                        tags,
                        tags_ar,
                        image,
                        created: new Date(created).toLocaleDateString("en-US", { dateStyle: 'long' })
                    }

                }))

                dispatch && dispatch(setData(stories))

            }

        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getSuccessStoriesById = (id, setData) => {
    return endpoints.
        getSuccessStoriesById(id).then(async (res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let stories = await Promise.all(data.map(async item => {

                    let { id, attributes, relationships } = item;
                    let { title, titlear, short_description, short_descriptionar, description, descriptionar, created } = attributes;
                    let { banner, story_paragraph, story_tags, story_tagsar } = relationships;

                    let rows = await endpoints.getImages(story_paragraph.links.related.href).then(async (res) => {
                        if (res.status === 200) {

                            let data = res.data.data;

                            let rows = await Promise.all(data.map(async (item, index) => {

                                console.log("cnana", item, index)

                                let { field_paragraph_title, field__nwan_alfqrt, field_paragraph_description, field_wsf_alfqrt } = item.attributes;
                                let { field_paragraph_image } = item.relationships;

                                let image = await endpoints.getImages(field_paragraph_image.links.related.href).then((res) => {

                                    if (res.status === 200) {

                                        if (res.data.data) {
                                            let image = res.data.data.attributes.uri.url;

                                            return `${process.env.REACT_APP_BASE_URL}${image}`;
                                        }

                                        return null;

                                    }

                                });

                                return {
                                    title: field_paragraph_title,
                                    title_ar: field__nwan_alfqrt,
                                    description: field_paragraph_description,
                                    description_ar: field_wsf_alfqrt,
                                    image
                                }

                            }));

                            return rows;

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Rows", err)
                    })

                    let image = await endpoints.getImages(banner.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let image = res.data.data.attributes.uri.url

                            return `${process.env.REACT_APP_BASE_URL}${image}`;

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.name

                            return [tag]

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags_ar = await endpoints.getImages(story_tagsar.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.name

                            return [tag]

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    console.log({
                        id,
                        title,
                        title_ar: titlear,
                        short_description: short_description,
                        short_description_ar: short_descriptionar,
                        description,
                        description_ar: descriptionar,
                        tags,
                        tags_ar,
                        image,
                        created: new Date(created).toLocaleDateString("en-US", { dateStyle: 'long' }),
                        rows
                    })

                    return {
                        id,
                        title,
                        title_ar: titlear,
                        short_description: short_description,
                        short_description_ar: short_descriptionar,
                        description,
                        description_ar: descriptionar,
                        tags,
                        tags_ar,
                        image,
                        created: new Date(created).toLocaleDateString("en-US", { dateStyle: 'long' }),
                        rows
                    }

                }))

                setData(stories[0])

            }

        }).catch((err) => {
            console.log("Error message", err)
        })
}