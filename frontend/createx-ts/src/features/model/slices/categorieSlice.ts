import { createSlice } from "@reduxjs/toolkit";

type CategoryType = {
    category: number,
    inputText: string
};

const initialState: CategoryType = {
    category: 0,
    inputText: ''
}

const categoriesSlice = createSlice({
    name: 'categories',

    initialState,

    reducers: {
        setCategory(state, action){
            state.category = action.payload;
        },

        setInputText(state, action){
            state.inputText = action.payload;
            console.log(state.inputText)
        }
    }
});

export const {setCategory, setInputText} = categoriesSlice.actions;
export default categoriesSlice.reducer;