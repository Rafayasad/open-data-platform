import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topics: null,
    publishers: null,
    tags: null,
    file_Formats: null,
    filter: null,
    storiesTags: null,
    datasetsSuggestion: null,
    supportSuggestion: null
}

export const facetsSlice = createSlice({
    name: 'facets',
    initialState,
    reducers: {
        setTopics: (state, action) => {
            state.topics = action.payload
        },
        setPublishers: (state, action) => {
            state.publishers = action.payload
        },
        setTags: (state, action) => {
            state.tags = action.payload
        },
        setFileFormats: (state, action) => {
            state.file_Formats = action.payload
        },
        setStoriesTags: (state, action) => {
            state.storiesTags = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        setDatasetsSuggestion: (state, action) => {
            state.datasetsSuggestion = action.payload
        },
        setSupportSuggestion: (state, action) => {
            state.supportSuggestion = action.payload
        }
    }
})

export const { setTopics, setPublishers, setTags, setFileFormats, setFilter, setStoriesTags, setDatasetsSuggestion, setSupportSuggestion } = facetsSlice.actions

export default facetsSlice.reducer