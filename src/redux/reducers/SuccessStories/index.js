import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stories: null,
    filters: [
        {
            type: "Sort By",
            title: 'Recent'
        }
    ]
}

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            state.stories = action.payload
        },
        setStoriesFilters: (state, action) => {
            state.filters = action.payload
        }
    },
})

export const { setStories, setStoriesFilters } = storiesSlice.actions

export default storiesSlice.reducer