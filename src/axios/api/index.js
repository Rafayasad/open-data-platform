import _ from 'lodash';
import { convertHtmlToString } from "../../utils"
import { endpoints } from "../endpoints"
import { generateFile } from "../../utils/generic.js";
import { locales } from "../../i18n/helper"
import i18n from "../../i18n/i18n"
import { toast } from "react-toastify";
import { routes } from '../../router/helper';

var currentLanguage = i18n.language === locales.AR ? "ar" : "en";

export const getPlatformInsights = (setData, setLoading) => {
    return endpoints.
        getPlatformInsights().then((res) => {
            if (res.status === 200) {
                setData(res.data.data)
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getMostViewedDatasets = (setData, setLoading) => {
    return endpoints.
        getMostViewedDatasets().then((res) => {
            if (res.status === 200) {
                console.log("hello", res.data.data);
                let data = res.data.data;
                let transform = data.en.map(item => {

                    let index = data.ar.findIndex(itm => itm.identifier === item.identifier);
                    let ar_obj = {
                        ...data.ar[index]
                    }

                    ar_obj.publisher_ar = ar_obj.publisherlear
                    ar_obj.title_ar = ar_obj.titlear
                    ar_obj.tags_ar = ar_obj.themelear
                    ar_obj.resources_ar = ar_obj.distributionlear.map(item => {
                        return (
                            {
                                title: item.titlelear,
                                format: item.format === "pdf" ? "pdf"
                                    : item.format === "excel" ? "excel"
                                        : item.format === "esri rest" ? "excel"
                                            : item.format === "xlsx" ? "excel"
                                                : item.format === "xls" ? "excel"
                                                    : item.format === "csv" && "csv",
                                downloadURL: item.url
                            }

                        )
                    })

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlear
                    delete ar_obj.themelear
                    delete ar_obj.distributionlear

                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/${item.identifier}`,
                        resources: item.distribution.map(item => {
                            return (
                                {
                                    title: item.title,
                                    format: item.format === "pdf" ? "pdf"
                                        : item.format === "excel" ? "excel"
                                            : item.format === "esri rest" ? "excel"
                                                : item.format === "xlsx" ? "excel"
                                                    : item.format === "xls" ? "excel"
                                                        : item.format === "csv" && "csv",
                                    downloadURL: item.url
                                }

                            )
                        }),
                        ...ar_obj
                    }
                })

                setData(transform)
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getRecentsDatasets = (setData, setLoading) => {
    return endpoints.
        getRecentsDatasets().then((res) => {
            if (res.status === 200) {
                console.log("dtatdatdatda", res.data);
                let data = res.data.data;

                let transform = data.en.map(item => {

                    let index = data.ar.findIndex(itm => itm.identifier === item.identifier);
                    let ar_obj = {
                        ...data.ar[index]
                    }

                    ar_obj.publisher_ar = ar_obj.publisherlear
                    ar_obj.title_ar = ar_obj.titlear
                    ar_obj.tags_ar = ar_obj.themelear
                    ar_obj.resources_ar = ar_obj.distribution.map(item => {
                        return (
                            {
                                title: item.titlelear,
                                format: item.format === "pdf" ? "pdf"
                                    : item.format === "esri rest" ? "excel"
                                        : item.format === "xlsx" ? "excel"
                                            : item.format === "xls" ? "excel"
                                                : item.format === "csv" && "csv",
                                downloadURL: item.url
                            }

                        )
                    })

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlelear
                    delete ar_obj.themelear
                    delete ar_obj.distribution


                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/${item.identifier}`,
                        resources: item.distribution.map(item => {
                            return (
                                {
                                    title: item.title,
                                    format: item.format === "pdf" ? "pdf"
                                        : item.format === "esri rest" ? "excel"
                                            : item.format === "xlsx" ? "excel"
                                                : item.format === "xls" ? "excel"
                                                    : item.format === "csv" && "csv",
                                    downloadURL: item.url
                                }

                            )
                        }),
                        ...ar_obj
                    }
                })
                setData(transform)
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
                    ar_obj.resources_ar = ar_obj.distribution.map(item => {
                        return (
                            {
                                title: item.titlelear,
                                format: item.format === "pdf" ? "pdf"
                                    : item.format === "esri rest" ? "excel"
                                        : item.format === "xlsx" ? "excel"
                                            : item.format === "xls" ? "excel"
                                                : item.format === "csv" && "csv",
                                downloadURL: item.url
                            }

                        )
                    })

                    delete ar_obj.identifier
                    delete ar_obj.keywordlear
                    delete ar_obj.publisherlear
                    delete ar_obj.titlear
                    delete ar_obj.themelear
                    delete ar_obj.distribution

                    return {
                        id: item.identifier,
                        title: item.title,
                        publisher: item.publisher,
                        tags: item.theme,
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/${item.identifier}`,
                        resources: item.distribution.map(item => {
                            return (
                                {
                                    title: item.title,
                                    format: item.format === "pdf" ? "pdf"
                                        : item.format === "esri rest" ? "excel"
                                            : item.format === "xlsx" ? "excel"
                                                : item.format === "xls" ? "excel"
                                                    : item.format === "csv" && "csv",
                                    downloadURL: item.url
                                }

                            )
                        }),
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

                let sorted = _.sortBy(transform, 'title');

                return sorted

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

                let sorted = _.sortBy(transform, 'title');

                return sorted

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

    let finalFilters = []
    let themeArray = []
    let publisherArray = []
    let tagsArray = []

    filters?.filter((el, index) => {
        el.type == "theme" ? themeArray.push(el.title) : el.type == "themelear" ? themeArray.push(el.title)
            : el.type == "publisher__name" ? publisherArray.push(el.title) : el.type == "publisherlear__name" ? publisherArray.push(el.title)
                : el.type == "keyword" ? tagsArray.push(el.title) : el.type == "keywordlear" && tagsArray.push(el.title)
    })

    finalFilters.push(
        { key: i18n.language === locales.EN ? "theme" : "themelear", values: themeArray },
        { key: i18n.language === locales.EN ? "publisher__name" : "publisherlear__name", values: publisherArray },
        { key: i18n.language === locales.EN ? "keyword" : "keywordlear", values: tagsArray }
    )

    return endpoints.
        getAllDatasets(search, sort, currentPage, rowsPerPage, finalFilters).then(async (res) => {
            if (res.status === 200) {

                if (res.data.total > 0 && search && search.trim() !== "") {
                    let obj = {
                        keyword: search,
                        ip: "192.168.0.44",
                        lang: currentLanguage,
                        type: "dataset"
                    }
                    await endpoints.
                        postSearch(obj).then((res) => {
                        }).catch((err) => {
                            console.log("Error Message", err)
                        })
                }

                setTotalCount(res.data.total)

                let arr = []

                arr = Object.values(res.data.results)?.map(item => (
                    {
                        id: item.identifier,
                        title: item.title,
                        title_ar: item.titlear,
                        description: item.description,
                        description_ar: item.descriptionlear,
                        publisher: item.publisher?.name,
                        publisher_ar: item.publisherlear?.name,
                        tags: item.theme,
                        tags_ar: item.themelear,
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/${item.identifier}`,
                        resources: item.distribution.filter(item => (
                            {
                                title: item.title,
                                title_ar: item.titlelear,
                                description: item.description,
                                description_ar: item.descriptionlear,
                                format:
                                    item.format === "pdf" ? "pdf"
                                        : item.format === "excel" ? "excel"
                                            : item.format === "esri rest" ? "excel"
                                                : item.format === "xlsx" ? "excel"
                                                    : item.format === "xls" ? "excel"
                                                        : item.format === "csv" ? "csv"
                                                            : item.format === "API" && "api",
                                downloadURL: item.downloadURL
                            }
                        )),
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
        getDatasetById(id).then(async (res) => {
            if (res.status === 200) {

                // const view_count_payload = {
                //     identifier: id,
                //     ip_address: "172.0.9.01"
                // }

                //view count api CORS error
                // return await endpoints.viewCount(view_count_payload).then((res) => {

                let item = res.data;

                let filteredResources = item.distribution.filter(item => {
                    let itemm = item.data
                    if (itemm.downloadURL && itemm.downloadURL !== "") {
                        return (
                            {
                                title: itemm.title,
                                title_ar: itemm.titlelear,
                                description: itemm.description,
                                description_ar: itemm.descriptionlear,
                                format: itemm.format === "pdf" ? "pdf"
                                    : item.format === "excel" ? "excel"
                                        : itemm.format === "esri rest" ? "excel"
                                            : itemm.format === "xlsx" ? "excel"
                                                : itemm.format === "xls" ? "excel"
                                                    : itemm.format === "csv" ? "csv"
                                                        : itemm.format === "API" && "API",
                                downloadURL: itemm.downloadURL
                            }
                        )
                    }
                })

                let data = {
                    id: item.identifier,
                    title: item.title,
                    title_ar: item.titlear,
                    description: item.description,
                    description_ar: item.descriptionlear,
                    publisher: item.publisher?.data.name,
                    publisher_ar: item.publisherlear?.data.name,
                    frequency: item.accrualPeriodicity === "R/P1Y" ? "Annual" : item.accrualPeriodicity === "auto/freq" ? "Automated" : "None",
                    frequency_ar: item.accrualPeriodicity === "R/P1Y" ? "سنوي" : item.accrualPeriodicity === "auto/freq" ? "تلقائي" : "لا يوجد",
                    access_level: item.accessLevel,
                    access_level_ar: item.accessLevellear,
                    license: item.license,
                    license_ar: item.licenselear,
                    topics: item.theme.map(item => item.data),
                    topics_ar: item.themelear.map(item => item.data),
                    tags: item.keyword.map(item => item.data),
                    tags_ar: item.keywordlear.map(item => item.data),
                    resources: filteredResources.map(item => item.data),
                    created: item.issued,
                    modified: item.modified,
                }

                setData(data)

                // }).catch((err) => {
                //     console.log("Error message", err)
                // })
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
                                id: item.id,
                                title,
                                title_ar: field_title_ar,
                                description: field_application_description,
                                description_ar: field_application_description_ar,
                                image: `${process.env.REACT_APP_BASE_URL}${res.data.data.attributes.uri.url}`,
                                applicationURL: field_application_url.uri
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

    let categories_arr = await endpoints.getFaqsCategory().then((res) => {

        let categories = []

        if (res.status === 200) {

            let data = res.data.data;

            data.map((item) => {

                const id = item.id
                const { name, description, field_title_ar, field_alwsf } = item.attributes;

                let obj = {
                    id,
                    title: name,
                    description: convertHtmlToString(description.value),
                    title_ar: field_title_ar,
                    description_ar: field_alwsf
                }

                categories.push(obj)

            })
        }

        return categories

    })

    dispatch && dispatch(setData(categories_arr))

}

export const getQuestionByCategories = (setData, questionID) => {
    return endpoints.
        getQuestionByCategories().then((res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let categoryQuestions = []

                data?.map(item => {

                    const ID = item.id

                    const { title, field_question_ar } = item.attributes;
                    const { id } = item.relationships.field_fa.data;

                    if (questionID == id) {

                        categoryQuestions.push({
                            id: ID,
                            title,
                            title_ar: field_question_ar
                        })

                        return;
                    }

                })

                setData(categoryQuestions)

            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const getPopularQuestions = (dispatch, setData) => {
    return endpoints.
        getPopularQuestions().then((res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let popularQuestions = []

                data.slice(-5).map(item => {

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

export const getQuestionBySearch = (text, setData) => {
    return endpoints.
        getQuestionBySearch(text).then(async (res) => {

            if (res.status === 200) {

                let data = res.data.data;

                if (data.length > 0 && text && text.trim() !== "") {
                    let obj = {
                        keyword: text,
                        ip: "192.168.0.44",
                        lang: currentLanguage,
                        type: "support"
                    }
                    await endpoints.
                        postSearch(obj).then((res) => {
                        }).catch((err) => {
                            console.log("Error Message", err)
                        })
                }

                let searchedQuestions = []

                data.map(item => {

                    const id = item.id
                    const { title, field_question_ar } = item.attributes;

                    searchedQuestions.push({
                        id,
                        title,
                        title_ar: field_question_ar
                    })

                    return;

                })

                setData(searchedQuestions)

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
                    let { banner, story_paragraph, story_tags } = relationships;

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

                    let tags_ar = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.field_story_tag_namear

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
                    let { banner, story_paragraph, story_tags } = relationships;

                    let rows = await endpoints.getImages(story_paragraph.links.related.href).then(async (res) => {
                        if (res.status === 200) {

                            let data = res.data.data;

                            let rows = await Promise.all(data.map(async (item, index) => {

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

                    let tags_ar = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tag = res.data.data.attributes.field_story_tag_namear

                            return [tag]

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
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

export const validateUser = async (navigate, route, setLoading, payload) => {

    setLoading(true)

    let { email, password } = payload;

    await endpoints.validateUser({ username: email, pass: password })
        .then(async (res) => {
            setLoading(false)
            if (res.status === 200) {
                if (res.data.status === 200) {

                    await endpoints.otp({ type: "send", username: email })
                        .then((res) => {
                            if (res.status === 200) {
                                if (res.data.status === 200) {
                                    toast(res.data.message, { type: "success" })
                                    navigate(route, { state: { email, password } })
                                } else {
                                    toast(res.data.message, { type: "error" })
                                }
                            }
                        }).catch((err) => {
                            console.log("Error message", err)
                        })

                } else {
                    toast(res.data.message, { type: "error" })
                }
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const login = async (dispatch, setData, setLoading, payload, route) => {

    setLoading(true)

    let { email, password, otp } = payload;
    let data = {
        name: email,
        pass: password
    }

    await endpoints.otp({ type: "verify", username: email, otp_v: otp })
        .then(async (res) => {
            if (res.status === 200) {
                if (res.data.status === 200) {
                    let token = await endpoints.getCRSFToken()
                        .then((res) => {
                            if (res.status === 200) {
                                return res.data
                            }

                        }).catch((err) => {
                            console.log("Error message", err)
                        })

                    let headers = {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': token,
                        Accept: 'application/json',
                    }

                    await endpoints.login(data, headers)
                        .then((res) => {
                            if (res.status === 200) {
                                dispatch && dispatch(setData(res.data))
                                window.location.assign(route);
                            } else if (res.data.status === 400) {
                                toast(res.data.message, { type: 'error' })
                            } else {
                                toast("Invalid username or password.", { type: "error" })
                            }
                            setLoading(false)
                        }).catch((err) => {
                            setLoading(false)
                            console.log("Error message", err)
                            toast("Something went wrong.", { type: "error" })
                        })
                } else {
                    setLoading(false)
                    toast(res.data.message, { type: "error" })
                }
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getInsightsReport = (setData, payload, setLoading, setDatatype) => {

    let new_payload = { ...payload }

    new_payload.datatype = new_payload.datatype === 'pdf' ? 'pdf' : "json"

    payload?.datatype !== "pdf" && setLoading(true);

    const options = {
        responseType: payload.datatype == "pdf" ? "blob" : "json"
    }

    return endpoints.getInsightsReport(new_payload, options)
        .then((res) => {
            setLoading(false);
            if (res.status === 200) {
                if (payload?.datatype === "csv" || payload?.datatype === "excel") {
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'insights_report', [res.data])
                    setDatatype('');
                } else if (payload?.datatype === 'pdf') {
                    console.log("hello");
                    const href = window.URL.createObjectURL(res.data);
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', 'insight_report.pdf'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(href);
                    setDatatype('');
                }

                if (payload?.datatype !== "pdf" && payload?.datatype !== "excel" && payload?.datatype !== "csv") {
                    let data = { ...res.data.data };
                    setData(data);
                }
            }

        })
        .catch((err) => {
            setLoading(false)
            console.log("Error message", err)
        })
}

export const getPublishersReport = (setData, payload, setLoading, setTotalCount, setDatatype) => {

    let new_payload = { ...payload }

    new_payload.datatype = new_payload.datatype === 'pdf' ? 'pdf' : "json"

    payload?.datatype !== "pdf" && setLoading(true);

    const options = {
        responseType: payload.datatype == "pdf" ? "blob" : "json"
    }

    return endpoints.getPublishersReport(new_payload, options)
        .then((res) => {
            setLoading(false)
            console.log("paadddd", payload,);
            if (res.status === 200) {
                if (payload.datatype === "csv" || payload.datatype === "excel") {
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'publishers_report', [res.data])
                    setDatatype('');
                } else if (payload.datatype === 'pdf') {
                    console.log("hello");
                    const href = window.URL.createObjectURL(res.data);
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', 'publishers_report.pdf'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(href);
                    setDatatype('');
                }

                if (payload?.datatype !== "pdf" && payload?.datatype !== "excel" && payload?.datatype !== "csv") {
                    setData(res.data.data);
                    setTotalCount(res.data.total_count);
                }

            }

        })
        .catch((err) => {
            setLoading(false)
            console.log("Error message", err)
        })
}

export const getDatasetsReport = (setData, payload, setLoading, setTotalCount, setDatatype) => {

    let new_payload = { ...payload }

    new_payload.datatype = new_payload.datatype === 'pdf' ? 'pdf' : "json"

    payload?.datatype !== "pdf" && setLoading(true);

    const options = {
        responseType: payload?.datatype == "pdf" ? "blob" : "json"
    }

    return endpoints.getDatasetsReport(new_payload, options)
        .then((res) => {
            setLoading(false);
            if (res.status === 200) {
                if (payload?.datatype === "csv" || payload?.datatype === "excel") {
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'dataset_report', [res.data])
                    setDatatype('');
                } else if (payload?.datatype === 'pdf') {
                    console.log("hello");
                    const href = window.URL.createObjectURL(res.data);
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', 'dataset_report.pdf'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    window.URL.revokeObjectURL(href);
                    setDatatype('');
                }

                if (payload?.datatype !== "pdf" && payload?.datatype !== "excel" && payload?.datatype !== "csv") {
                    if (res.data.status === 200) {
                        setData(res.data.data);
                        setTotalCount(res.data.total_count);
                    }
                }
            }

        })
        .catch((err) => {
            setLoading(false)
            console.log("Error message", err)
        })
}

export const register = async (navigate, route, setLoading, payload) => {

    setLoading(true)

    let { email, password, reEmail, name } = payload;
    let data = {
        name,
        email,
        conf_email: reEmail,
        passw: password,
        ipaddress: "192.168.0.222"
    }

    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    await endpoints.register(data, headers)
        .then((res) => {
            if (res.status === 200) {
                navigate(route, { replace: true });
            }
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log("Error message", err)
        })

}

export const getSearch = (type, setData) => {
    return endpoints.
        getSearch(type).then((res) => {
            if (res.status === 200) {
                setData(res.data.data);
            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const recoverPassword = async (navigate, route, setLoading, payload) => {

    setLoading(true)

    let { email } = payload;

    let data = {
        email
    }

    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    return await endpoints.
        recoverPassword(data, headers).then((res) => {

            if (res.status === 200) {
                if (res.data.status === 200) {
                    navigate(route, { replace: true });
                    toast(res.data.message, { type: 'success' })
                } else if (res.data.status === 400) {
                    toast(res.data.message, { type: 'error' })
                }
            }

            setLoading(false)

        }).catch((err) => {
            setLoading(false)
            console.log("Error Message", err)
        })
}

export const resetPassword = async (navigate, route, setLoading, payload) => {

    setLoading(true)

    let { email, password, otp } = payload;

    let data = {
        email,
        pass: password,
        mstpx: otp
    }

    let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    }

    return await endpoints.
        resetPassword(data, headers).then((res) => {

            if (res.status === 200) {
                if (res.data.status === 200) {
                    navigate(route, { replace: true });
                    toast(res.data.message, { type: 'success' })
                } else if (res.data.status === 400) {
                    toast(res.data.message, { type: 'error' })
                }
            }

            setLoading(false)

        }).catch((err) => {
            setLoading(false)
            console.log("Error Message", err)
        })
}

export const realTimeApis = (setData, payload, setLoading) => {
    return endpoints.
        realTimeApis(payload).then((res) => {

            console.log("res,,,,,,", res);

            if (res.status === 200) {

                let data = res.data.data;

                let arr = [];

                data?.map(item => {

                    const {
                        title,
                        field_title_ar,
                        field_description,
                        field_description_ar,
                        field_short_description,
                        field_short_description_ar
                    } = item.attributes;

                    const { href } = item.links;

                    arr.push({
                        title,
                        title_ar: field_title_ar,
                        description: convertHtmlToString(field_description.value),
                        description_ar: convertHtmlToString(field_description_ar.value),
                        short_description: field_short_description,
                        short_description_ar: field_short_description_ar
                    })

                }

                )

                setData(res.data);
            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const getPrivacyPolicy = (setData, setLoading) => {

    setLoading(true);

    return endpoints.
        getPrivacyPolicy()
        .then((res) => {

            setLoading(false);

            // if(res.data.data.length > 0)

            let arr = res.data.data.slice(-1).map(item => (
                {
                    title: item.attributes.title,
                    title_ar: item.attributes.field_privacytitle_ar,
                    description: item.attributes.field_body,
                    description_ar: item.attributes.field_privacy_description_ar
                }))

            let obj = {
                title: arr[0].title,
                title_ar: arr[0].title_ar,
                description: arr[0].description,
                description_ar: arr[0].description_ar
            }

            setData(obj)

        }).catch((err) => {
            console.log("Error Message", err)
            setLoading(false);
        })
}

export const contactUs = (navigate, route, setLoading, payload) => {

    setLoading(true);

    const { name, email, selectedValue, message } = payload;

    const data = {
        name,
        email,
        subject: selectedValue,
        message,
        ipaddress: "3.3.3:300"
    }

    return endpoints.contactUs(data)
        .then((res) => {
            setLoading(false);
            navigate(route, { replace: true });
        }).catch((err) => {
            console.log("Error Message", err);
            setLoading(false);
        })
}

export const checkUser = (dispatch, handleLogin, handleLogout) => {
    return endpoints.checkUser()
        .then((res) => {
            if (res.status === 200) {
                if (res.data.status === 200) {
                    if (res.data.data === "1") {
                        dispatch && dispatch(handleLogin(null))
                    } else if (res.data.data === "0") {
                        dispatch && dispatch(handleLogout())
                    }
                }
            }
        }).catch((err) => {
            console.log("Error Message", err);
        })
}

export const logout = (dispatch, handleLogout) => {
    return endpoints.logout()
        .then((res) => {
            if (res.status === 200) {
                dispatch && dispatch(handleLogout());
                window.location.reload();
            }
        }).catch((err) => {
            console.log("Error Message", err);
        })
}