import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import facetsReducer from './reducers/Facets';
import aboutReducer from './reducers/About';
import applicationReducer from './reducers/Applications';
import successStoriesReducer from './reducers/SuccessStories';
import supportReducer from './reducers/Support';
import authenticationReducer from './reducers/Authentication';

const persistConfig = {
    key: 'root',
    storage,
}

export const store = configureStore({
    reducer: {
        facets: facetsReducer,
        about: aboutReducer,
        application: applicationReducer,
        stories: successStoriesReducer,
        support: supportReducer,
        authentication: persistReducer(persistConfig, authenticationReducer)
    }
});

export const persistor = persistStore(store);