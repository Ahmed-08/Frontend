import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filterSlice from "../../domain/slices/filterSlice.ts";
import accessSlice from "../../domain/slices/accessSlice.ts";
import cartSlice from "../../domain/slices/CartSlice.ts";

export const store = configureStore({
	reducer: {
		filter: filterSlice,
		access: accessSlice,
		cart: cartSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
