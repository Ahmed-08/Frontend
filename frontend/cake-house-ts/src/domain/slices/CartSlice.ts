import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../shared/config/types";

type CartProductType = {
	product: ProductType;
	count: number;
	productPrice: number;
};

const initialState: {
	totalPrice: number;
	items: CartProductType[];
} = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: "cartSlice",
	initialState,
	reducers: {
		incrementProduct(state, actions) {
			const findItem = state.items.find(
				(obj) => obj.product.id === actions.payload.product.id
			);
			state.totalPrice += actions.payload.product.price;

			if (findItem) {
				findItem.count++;
				findItem.productPrice += actions.payload.product.price;
			} else {
				state.items.push(actions.payload);
			}
		},

		decrementProduct(state, actions) {
			const findItem = state.items.find(
				(obj) => obj.product.id === actions.payload.product.id
			);
			state.totalPrice -= actions.payload.product.price;
			if (findItem) {
				findItem.count--;
				findItem.productPrice -= actions.payload.product.price;
			}
		},

		deleteProduct(state, actions) {
			const arr = state.items.filter((obj) => {
				return obj.product.id !== actions.payload.product.id;
			});

			state.totalPrice -=
				actions.payload.product.price * actions.payload.count;
			state.items = [...arr];
		},
	},
});

export const { incrementProduct, decrementProduct, deleteProduct } =
	cartSlice.actions;
export default cartSlice.reducer;
