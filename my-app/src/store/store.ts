import { githubReducer } from './github/github.slice';
import { githubApi } from './github/github.api';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query';


export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer, 
        github: githubReducer
    },

    // api სთან სამუშაოდ 
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})


setupListeners(store.dispatch) //  refetchOnFocus


//ქასტომ ტაიპი - გავამარტივოთ თუ story  დან რა მოანცემებზე ვმუშაობთ
export type RootState = ReturnType<typeof store.getState>