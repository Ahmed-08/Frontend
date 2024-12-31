import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { CartProductType } from "../../../shared/types.ts";

type CartType = {
    status: boolean,
    carts: CartProductType[]
}

const  initialState: CartType = {
    status: true,
    carts: [],
}

export const getCarts = createAsyncThunk(
    'products/getProduct',

    async ({url, signal}:{url: string, signal: AbortSignal}, {rejectWithValue}): Promise<CartProductType[] | unknown>=>{

        try{
            const response = await fetch(url, {signal});
            if(!response.ok){
                throw new Error("error");
            }
            const data = response.json();
            return data;

        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const cartSlice = createSlice({
    name: 'products',

    initialState,
    
    reducers: {},

    extraReducers: (builder)=>{
        builder.addCase(getCarts.fulfilled, (state, action: PayloadAction<CartProductType[] | unknown>)=>{
                state.status = true;
                state.carts = action.payload as unknown as CartProductType[];
            }
        )

        builder.addCase(getCarts.rejected, (state)=>{
                state.status = false;
            }
        )
    }
});

export default cartSlice.reducer; 