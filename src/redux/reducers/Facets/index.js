import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topics: null,
    publishers: null,
    tags: null,
    filter: null,
    storiesTags: null
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
        setStoriesTags: (state, action) => {
            state.storiesTags = action.payload
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        }
    },
})

export const { setTopics, setPublishers, setTags, setFilter, setStoriesTags } = facetsSlice.actions

export default facetsSlice.reducer