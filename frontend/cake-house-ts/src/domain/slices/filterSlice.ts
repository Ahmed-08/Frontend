import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../shared/config/types";

export const getProducts = createAsyncThunk(
	"filter/filterSlice",
	async function (
		{ url, signal }: { url: string; signal: AbortSignal },
		{ rejectWithValue }
	): Promise<ProductType[] | unknown> {
		try {
			const response = await fetch(url, {signal});
			if (!response.ok) {
				throw new Error("error");
			}
			const data = await response.json();
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

interface FilterType {
	searchValue: string;
	error: boolean;
	product: ProductType[];
}

const initialState: FilterType = {
	searchValue: "",
	error: false,
	product: [],
};

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.searchValue = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getProducts.fulfilled, (state, actions) => {
			state.product = actions.payload as unknown as ProductType[];
			state.error = false;
		});

		builder.addCase(getProducts.rejected, (state) => {
			state.error = true;
		});
	},
});

export const { setSearch } = filterSlice.actions;
export default filterSlice.reducer;
