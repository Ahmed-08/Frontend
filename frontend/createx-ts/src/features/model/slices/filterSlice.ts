import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EventType{
    theme: string,
    sortby: string,
    show: number,
    inputText: string,
    view: 1 | 2,
    start: number
};

const initialState: EventType = {
    theme: 'all theme',
    sortby: 'ask',
    show: 3,
    inputText: '',
    view: 1,
    start: 0
};

const filterSlice = createSlice({
    name: 'filter',

    initialState,

    reducers: {
        setTheme(state, action: PayloadAction<string>){
            state.theme = action.payload
        },
        setSortby(state, action: PayloadAction<string>){
            state.sortby = action.payload==='newest'? 'ask':'desc';
        },
        setShow(state, action: PayloadAction<number>){
            state.show = action.payload > 0 ? action.payload: 1;
        },
        setInputText(state, action: PayloadAction<string>){
            state.inputText = action.payload;
        },

        setView(state, action: PayloadAction<number>){
            state.view = action.payload === 1 || action.payload === 2 ? action.payload: 1;
        },

        setStart(state, action: PayloadAction<number>){
            state.start = action.payload;
        }
    }

})

export const {setTheme, setSortby, setShow, setInputText, setView, setStart} = filterSlice.actions;
export default filterSlice.reducer;
