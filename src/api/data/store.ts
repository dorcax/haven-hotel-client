import {FLUSH, PAUSE, PERSIST, persistCombineReducers, PURGE, REGISTER, REHYDRATE} from "redux-persist"
import storage from "redux-persist/es/storage"
import { api } from "./base"
import { auth } from "./auth"
import { configureStore } from "@reduxjs/toolkit"
import persistStore from "redux-persist/es/persistStore"
import { setupListeners } from "@reduxjs/toolkit/query"

const persistedReducer = persistCombineReducers({
     key: "root",
    version: 1,
    storage,
    blacklist: [api.reducerPath], // don't save RTK Query cache

},{
    [auth.name]:auth.reducer ,
    [api.reducerPath] :api.reducer
})

const serializableCheck = {
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
};

export const store =configureStore({
    reducer:persistedReducer,
    middleware:(getDafaultMiddleware)=>getDafaultMiddleware({serializableCheck}).concat(api.middleware)
})

export const persistor =persistStore(store)

setupListeners(store.dispatch);