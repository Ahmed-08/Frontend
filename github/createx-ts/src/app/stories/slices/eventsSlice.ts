import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EventDataType } from "../../../shared/types.ts";

interface EventType{
    events: EventDataType[]
}

const initialState: EventType = {
    events: []
}

export const getEvents = createAsyncThunk(
    'events/getEvents',

    async function (url: string, {rejectWithValue}): Promise<EventDataType[] | unknown> {
        
        const response = await fetch(url);
        try{
            if(!response.ok){
                throw new Error("something wrong")
            }
            const data = response.json()
            return data;
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},

    extraReducers: (builder)=>{
        builder.addCase(
            getEvents.fulfilled, (state, action: PayloadAction<EventDataType[] | unknown>)=>{
                state.events = action.payload as unknown as EventDataType[];
            }
        )
    }
})

export default eventSlice.reducer;