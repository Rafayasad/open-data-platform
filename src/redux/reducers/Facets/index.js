import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    topics: null,
    publishers: null,
    tags: null
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
    },
})

export const { setTopics, setPublishers, setTags } = facetsSlice.actions

export default facetsSlice.reducer