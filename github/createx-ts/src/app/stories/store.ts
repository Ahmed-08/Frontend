import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import cartSlice from './slices/cartSlice.ts';
import eventSlice from './slices/eventsSlice.ts';
import filterSlice from '../../features/model/slices/filterSlice.ts';
import categoriesSlice from "../../features/model/slices/categorieSlice.ts";
import accessSlice from "../../features/model/slices/accessSlice.ts"


export const store = configureStore({
    reducer: {
        carts: cartSlice,
        events: eventSlice,
        filter: filterSlice,
        categories: categoriesSlice,
        access: accessSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

