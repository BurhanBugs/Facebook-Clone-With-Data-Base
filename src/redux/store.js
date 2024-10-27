import { configureStore} from "@reduxjs/toolkit";
import feedReducer from './slices/postSlice'

export const store = configureStore({
    reducer: {
        
        feedSlice: feedReducer,
    }});