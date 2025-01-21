import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../shared/config/types";

export const request = createAsyncThunk(
	"request/accessSlice",

	async function ({ url, data }: { url: string; data: Object }, {rejectWithValue}): Promise<UserType | unknown> {
		try {
			const response = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				throw new Error("error");
			}

			return await response.json();
		} catch (error) {
            return rejectWithValue(error.message);
        }
	}
);

const user: UserType = {
	name: "",
	email: "",
	password: "",
};

const accessSlice = createSlice({
	name: "access",
	initialState: {
		user,
		status: false,
	},
	reducers: {
		setStatus(state, actions) {
			state.status = actions.payload;
		},
		setUser(state, actions) {
			state.user = actions.payload;
		}
	},

	extraReducers: (builder) => {
		builder.addCase(request.fulfilled, (state, actions) => {
			state.user = actions.payload as unknown as UserType;
			localStorage.setItem("user", JSON.stringify(state.user));
			state.status = true;
		});

		builder.addCase(request.rejected, (state) => {
			console.log("something wrong!");
			state.status = false;
		});
	},
});

export const { setStatus, setUser } = accessSlice.actions;
export default accessSlice.reducer;
