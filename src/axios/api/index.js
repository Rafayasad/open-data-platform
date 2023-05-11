import _ from 'lodash';
import { toast } from "react-toastify";
import { convertHtmlToString } from "../../utils"
import { endpoints } from "../endpoints"
import { generateFile, getUnixTime } from "../../utils/generic.js";
import { locales } from "../../i18n/helper"
import { BiError } from "react-icons/bi";
import i18next from 'i18next';

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

export const getMostViewedDatasets = (setData, setTotalCount, searchValue, setLoading, perPage, pageNumber, language) => {
    setLoading(true);
    setTotalCount(0)
    return endpoints.
        getMostViewedDatasets(perPage, pageNumber, searchValue, language).then((res) => {
            if (res.status === 200) {
                console.log("trans", res.data);
                setLoading(false);
                setTotalCount(res.data.total_count);
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
                                id: item.identifier,
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
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/detail?id=${item.identifier}`,
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
            setLoading(false);
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
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/detail?id=${item.identifier}`,
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
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/detail?id=${item.identifier}`,
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

                setData(transform.slice(0, 4))
                setLoading(false)
            }
        }).catch((err) => {
            console.log("Error message", err)
        })
}

export const getFacets = async (key_en, key_ar, dispatch, setData, filters) => {

    let en = await endpoints.
        getFacets(key_en, filters).then((res) => {

            if (res.status === 200) {

                let transform = res.data.facets.filter(item => item.name != " ").map(item => ({
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
        getFacets(key_ar, filters).then((res) => {
            if (res.status === 200) {
                console.log("sAASASAS", res.data);
                let transform = res.data.facets.filter(item => item.name != " ").map(item => ({
                    title: item.name,
                    value: item.total,
                    type: item.type
                })
                )

                console.log("sAASASASssssssssssssssssssssssssssssssssssssss", transform);

                let sorted = _.sortBy(transform, 'title');
                console.log("sAASASASsssssssssssssssssssssssssssssssssssssSORTs", sorted);

                return sorted

            }
        }).catch((err) => {
            console.log("Error message", err)
        })

    let facets = { en, ar }

    dispatch && dispatch(setData(facets))

}

export const getAllDatasets = (setData, setTotalCount, setLoading, search, sort, currentPage, rowsPerPage, filters, currentLanguage, dispatch, setTopics, setTags, setPublishers, setFileFormats) => {

    setLoading(true)
    setTotalCount(0)

    let finalFilters = []
    let themeArray = []
    let publisherArray = []
    let tagsArray = []
    let filesArray = []

    console.log("filterss", filters);

    filters?.filter((el, index) => {
        el.type == "theme" ? themeArray.push(el.title) : el.type == "themelear" ? themeArray.push(el.title)
            : el.type == "publisher__name" ? publisherArray.push(el.title) : el.type == "publisherlear__name" ? publisherArray.push(el.title)
                : el.type == "keyword" ? tagsArray.push(el.title) : el.type == "keywordlear" ? tagsArray.push(el.title)
                    : el.type == "file" && filesArray.push(el.title)
    })

    finalFilters.push(
        { key: currentLanguage === locales.EN ? "theme" : "themelear", values: themeArray },
        { key: currentLanguage === locales.EN ? "publisher__name" : "publisherlear__name", values: publisherArray },
        { key: currentLanguage === locales.EN ? "keyword" : "keywordlear", values: tagsArray },
        { key: "distribution__item__format", values: filesArray }
    )

    getFacets("theme", "themelear", dispatch, setTopics, finalFilters);
    getFacets("keyword", "keywordlear", dispatch, setTags, finalFilters);
    getFacets("publisher__name", "publisherlear__name", dispatch, setPublishers, finalFilters);
    getFileFormatsFacets("distribution__item__format", dispatch, setFileFormats, finalFilters);
    return endpoints.
        getAllDatasets(search, sort, currentPage, rowsPerPage, finalFilters).then(async (res) => {
            if (res.status === 200) {
                setLoading(false)
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

                // console.log(res.data.results?.map(item => console.log("RESULTS==>", item)));

                console.log("ssssssssssssssssssadasdsadsadas", res.data);
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
                        url: `${process.env.REACT_APP_BASE_URL}/dataset/detail?id=${item.identifier}`,
                        resources: item.distribution ? item.distribution.map(item => (
                            {
                                id: item.identifier,
                                title: item.title ? item.title : "No Name Found",
                                title_ar: item.titlelear ? item.titlelear : "لم يتم العثور على اسم",
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
                        )) : [],
                    }
                ))
                // setLoading(false)

                setData(arr);

            }
        }).catch((err) => {
            setLoading(false)
            console.log("Error message", err)
        })
}

export const getDatasetById = (id, setData) => {


    return endpoints.
        getDatasetById(id).then(async (res) => {
            if (res.status === 200) {

                let item = res.data;


                let filteredResources = item.distribution?.filter(item => {
                    let itemm = item.data
                    if (itemm.downloadURL && itemm.downloadURL !== "") {
                        return item
                    }
                })?.map(item => {
                    let itemm = item.data
                    return (
                        {
                            id: item.identifier,
                            title: itemm.title ? itemm.title : "No Name Found",
                            title_ar: itemm.titlelear ? itemm.titlelear : "لم يتم العثور على اسم",
                            description: itemm.description,
                            description_ar: itemm.descriptionlear,
                            format: itemm.format === "pdf" ? "pdf"
                                : item.format === "excel" || itemm.format === "xlsx" || itemm.format === "esri rest" || itemm.format == "xls" ? "excel"
                                    : itemm.format === "csv" ? "csv"
                                        : itemm.format === "API" && "API",
                            downloadURL: itemm.downloadURL ? itemm.downloadURL : "No File Uploaded Yet"
                        }
                    )
                })
                let downloadCount = await endpoints.getDownloadCountById(id)
                    .then((res) => {
                        if (res.status === 200) {
                            return res.data.data["Download Count"]
                        }
                    }).catch((err) => {
                        console.log("Error message", err)
                    })
                console.log("sssssssssssssssssssssid", filteredResources);
                console.log("sssssssssssssssssssssid", item.keyword?.map(item => item.data != ' ' ? item.data : 'no'));
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
                    // license: item.license,
                    // license_ar: item.licenselear,
                    license: "https://data.abudhabi/opendata/addata_open_license",
                    license_ar: "https://data.abudhabi/opendata/addata_open_license",
                    topics: item && item.theme?.map(item => item.data != ' ' ? item.data : ['No Topics Found']),
                    topics_ar: item && item.themelear?.map(item => item.data != ' ' ? item.data : ["لم يتم العثور على أي مواضيع"]),
                    tags: item && item.keyword?.map(item => item.data != ' ' ? item.data : ['No Tags Found']),
                    tags_ar: item && item.keywordlear?.map(item => item.data != ' ' ? item.data : ['لم يتم العثور على علامات']),
                    resources: filteredResources.length > 0 ? filteredResources :
                        [{
                            id: '',
                            title: 'No file uploaded yet.',
                            title_ar: "لم يتم تحميل أي ملف بعد."
                        }],
                    created: item.issued,
                    modified: item.modified,
                    downloadCount
                }

                console.log("DATATTATA", data);
                setData(data)

                const view_count_payload = {
                    identifier: id,
                    ip_address: "172.0.9.01"
                }
                return await endpoints.viewCount(view_count_payload).then((res) => {
                    if (res.status === 200) {
                        console.log("success", res);
                    }
                }).catch((err) => {
                    console.log("Error message", err)
                })
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
                                image: `${process.env.REACT_APP_IMAGE_BASE_URL}${res.data.data.attributes.uri.url}`,
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
                                    return `${process.env.REACT_APP_IMAGE_BASE_URL}${res.data.data.attributes.uri.url}`
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
                                                        return `${process.env.REACT_APP_IMAGE_BASE_URL}${res.data.data.attributes.uri.url}`
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

                dispatch && dispatch(setData(popularQuestions.slice(-5)))

            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const getQuestionBySearch = (text, setData, currentLanguage) => {
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

export const getSuccessStories = (dispatch, setData, toggleLoading, filters) => {

    dispatch && dispatch(toggleLoading());

    let category = filters.filter((item) => item.type === "Categories");
    let year = filters.filter((item) => item.type === "Year")[0];
    let sort = filters.filter((item) => item.type === "Sort By")[0];

    let data = {}

    if (sort) {
        if (sort.title === "Recent") {
            data.sort = "-created"
        } else if (sort.title === "Alphabetically") {
            data.sort = "title"
        }
    }

    if (year) {
        let start_date = getUnixTime(year.title + '-01-01')
        let end_date = getUnixTime(year.title + '-12-31')
        data.year = { start_date, end_date }
    }

    if (category) {
        data.category = category
    }

    return endpoints.
        getSuccessStories(data).then(async (res) => {

            if (res.status === 200) {

                let data = res.data.data;

                let stories = await Promise.all(data.map(async item => {

                    let { id, attributes, relationships } = item;
                    let { title, titlear, short_description, short_descriptionar, created } = attributes;
                    let { banner, story_paragraph, story_tags } = relationships;

                    let image = await endpoints.getImages(banner.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let image = res.data.data.attributes.uri.url

                            return `${process.env.REACT_APP_IMAGE_BASE_URL}${image}`;

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tags = res.data.data.map((item) => item.attributes.name)

                            return tags

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags_ar = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tags = res.data.data.map((item) => item.attributes.field_story_tag_namear)

                            return tags

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

                dispatch && dispatch(setData(stories));
                dispatch && dispatch(toggleLoading());

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
                    let { title, titlear, short_description, short_descriptionar, description, descriptionar, created, field_publisher_name, field_publisher_namear } = attributes;
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

                                            return `${process.env.REACT_APP_IMAGE_BASE_URL}${image}`;
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

                            return `${process.env.REACT_APP_IMAGE_BASE_URL}${image}`;

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tags = res.data.data.map((item) => item.attributes.name)

                            return tags

                        }
                    }).catch((err) => {
                        console.log("Error Message While Getting Tags", err)
                    })

                    let tags_ar = await endpoints.getImages(story_tags.links.related.href).then((res) => {
                        if (res.status === 200) {

                            let tags = res.data.data.map((item) => item.attributes.field_story_tag_namear)

                            return tags

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
                        publisher: field_publisher_name,
                        publisher_ar: field_publisher_namear,
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
                            setLoading(false)
                        }).catch((err) => {
                            setLoading(false)
                            console.log("Error message", err)
                        })

                } else {
                    toast(res.data.message, { type: "error" })
                }
            }
        }).catch((err) => {
            setLoading(false)
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
            setLoading(false)
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
                            setLoading(false)
                            if (res.status === 200) {
                                toast(res.data.message, { type: 'success' })
                                dispatch && dispatch(setData(res.data))
                                window.location.assign(route);
                            } else if (res.data.status === 400) {
                                toast(res.data.message, { type: 'error' })
                            } else {
                                toast("Invalid username or password.", { type: "error" })
                            }
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
                    console.log("RESS", res.data.data);
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'insights_report', [res.data.data])
                    setDatatype('');
                } else if (payload?.datatype === 'pdf') {
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
                    console.log("Insights Reports", data)
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
            if (res.status === 200) {
                if (payload.datatype === "csv" || payload.datatype === "excel") {
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'publishers_report', res.data.data)
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
                    let data = res.data.data;
                    setData(data);
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
                    generateFile(payload?.datatype === 'csv' ? 'csv' : payload?.datatype === 'excel' ? 'xlsx' : '', 'dataset_report', res.data.data)
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
            if (res.data.status === 200) {
                navigate(route, { replace: true });
                toast(res.data.message, { type: 'success' })
            } else {
                toast(res.data.message, { type: 'error' })
            }
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log("Error message", err)
            toast(err.message, { type: 'error' })
        })

}

export const getSearch = (type, dispatch, setData) => {
    return endpoints.
        getSearch(type).then((res) => {
            if (res.status === 200) {
                dispatch && dispatch(setData(res.data.data));
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

export const getAllRealTimeApis = (setData, setLoading) => {

    setLoading(true)

    return endpoints.
        getAllRealTimeApis().then((res) => {

            if (res.status === 200) {
                setLoading(false)

                let data = res.data.data;

                let arr = data.map(item => {
                    const {
                        title,
                        field_title_ar,
                        field_description,
                        field_description_ar,
                        field_name_of_authority,
                        field_name_of_authorityar
                    } = item.attributes;

                    return ({
                        id: item.id,
                        title,
                        title_ar: field_title_ar,
                        description: convertHtmlToString(field_description.value),
                        description_ar: convertHtmlToString(field_description_ar.value),
                        publisher: field_name_of_authority,
                        publisher_ar: field_name_of_authorityar
                    })

                })

                setData(arr);
            }

        }).catch((err) => {
            console.log("Error Message", err)
        })
}

export const getRealTimeApiById = (id, setData, setLoading) => {

    setLoading(true)

    return endpoints.
        getRealTimeApiById(id).then(async (res) => {

            if (res.status === 200) {
                setLoading(false)
                const {
                    title,
                    field_title_ar,
                    field_description,
                    field_description_ar,
                    field_name_of_authority,
                    field_name_of_authorityar,
                    created,
                    changed,
                    field_api_url
                } = res.data.data[0].attributes;

                const { field_api_file } = res.data.data[0].relationships;

                let fileUrl = await endpoints.getImages(field_api_file.links.related.href).then((res) => {

                    if (res.status === 200) {

                        if (res.data.data) {
                            let url = res.data.data.attributes.uri.url;

                            return `${process.env.REACT_APP_IMAGE_BASE_URL}${url}`;
                        }

                        return null;

                    }

                });

                let data = {
                    id: res.data.data[0].id,
                    title,
                    title_ar: field_title_ar,
                    description: convertHtmlToString(field_description.value),
                    description_ar: convertHtmlToString(field_description_ar.value),
                    publisher: field_name_of_authority,
                    publisher_ar: field_name_of_authorityar,
                    created,
                    modified: changed,
                    url: field_api_url.uri,
                    fileUrl
                }

                setData(data);
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
                    description: item.attributes.field_body.value,
                    description_ar: item.attributes.field_privacy_description_ar.value
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
            navigate(route, { state: { email } }, { replace: true });
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

export const logout = (dispatch, setLoading, handleLogout) => {
    setLoading(true)
    return endpoints.logout()
        .then((res) => {
            setLoading(false)
            console.log("logout", res);
            dispatch && dispatch(handleLogout());
            // if (res.status === 200) {
            // }
        }).catch((err) => {
            setLoading(false);
            console.log("Error Message", err);
        }).finally(() => {
            window.location.reload();
        })
}

export const getStoriesTags = (dispatch, setStoriesTags) => {
    return endpoints.getStoriesTags()
        .then((res) => {
            if (res.status == 200) {

                let tags = res.data.data?.map((item) => (
                    {
                        title: item.attributes.name,
                        id: item.attributes.drupal_internal__tid
                    }))

                let tags_ar = res.data.data?.map((item) => (
                    {
                        title: item.attributes.field_story_tag_namear,
                        id: item.attributes.drupal_internal__tid
                    }))

                let data = {
                    tags,
                    tags_ar
                }

                dispatch(setStoriesTags(data));
            }
        }).catch((err) => {
            console.log("error", err);
        })
}

export const addDownloadCount = (id, forDatasetsListing) => {

    console.log("download count", id);

    // setLoading(true)

    const data = {
        identifier: id,
        ip_address: "172.0.9.01"
    }

    const data_for_listing = {
        dataset_identifier: id,
        ip_address: "172.0.9.01"
    }

    return endpoints.addDownloadCountById(forDatasetsListing ? data_for_listing : data)
        .then((res) => {
            // setLoading(false)
            if (res.status === 200) {
                console.log("download count", res.data);
            }
        }).catch((err) => {
            // setLoading(false)
            console.log("Error Message", err);
        })
}

export const getFileFormatsFacets = (key, dispatch, setData, filters) => {
    return endpoints.getFileFormatsFacets(key, filters)
        .then((res) => {
            let files_Formats = res.data.data?.map((item) => (
                {
                    title: item.Format,
                    value: item.Count,
                    type: "file"
                }))
            dispatch(setData(files_Formats));
        })
        .catch((err) => {
            console.log("Error Message", err);
        })
}