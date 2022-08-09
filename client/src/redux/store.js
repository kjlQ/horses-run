import {configureStore} from "@reduxjs/toolkit";
import horseReducer from './slices/horseSlice'

export const store = configureStore({
    reducer: {
        handler: horseReducer,
    },
})