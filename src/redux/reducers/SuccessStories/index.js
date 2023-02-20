import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stories: null
}

export const storiesSlice = createSlice({
    name: 'stories',
    initialState,
    reducers: {
        setStories: (state, action) => {
            state.stories = action.payload
        }
    },
})

export const { setStories } = storiesSlice.actions

export default storiesSlice.reducer