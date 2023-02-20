import { configureStore } from '@reduxjs/toolkit';
import facetsReducer from './reducers/Facets';
import aboutReducer from './reducers/About';
import applicationReducer from './reducers/Applications';
import successStoriesReducer from './reducers/SuccessStories';
import supportReducer from './reducers/Support';

export const store = configureStore({
    reducer: {
        facets: facetsReducer,
        about: aboutReducer,
        application: applicationReducer,
        stories: successStoriesReducer,
        support: supportReducer
    }
});