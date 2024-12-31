import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { UserType } from "../../../shared/types.ts";

type FetchUser = {
    url: string,
    data: Object
}
export const getAccess = createAsyncThunk(
    'access/getAccess',

    async function(fetchData: FetchUser, {rejectWithValue}): Promise<UserType | unknown> {
        const {url, data} = fetchData;
        try{
            const response = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });

            if(!response.ok){
                throw new Error('Не удалось получить доступ! Попробуйте еще раз.')
            }

            return response.json();
        }catch(error){
            return rejectWithValue(error.message);
        }
    }
)



const user: UserType = {
    accessToken: '',
    user: {
        fullName: '',
        email: '',
        password: ''
    }
}

const accessSlice = createSlice({
    name: 'access',
    initialState: {
        isLogin: false,
        isRegister: false,
        checkbox: false,
        user
    },

    reducers: {
        setLogin(state){
            state.isLogin = !state.isLogin;
        },
        setRegister(state){
            state.isRegister = !state.isRegister;
        },

        setCheckbox(state, action){
            state.checkbox = action.payload
        },

        getUser(state){
            if(localStorage.getItem('user') !== null){
                state.user = JSON.parse(localStorage.getItem('user')!)
            }
        },

        clearUser(state){
            state.user = {
                accessToken: '',
                user: {
                    fullName: '',
                    email: '',
                    password: '',
                }
            }
        }

    },

    extraReducers: (builder)=>{
        builder.addCase(getAccess.fulfilled, (state, action)=>{
            state.user = action.payload as unknown as UserType;

            if(state.checkbox === true){
                localStorage.setItem("user", JSON.stringify(state.user));
            }else{
                sessionStorage.setItem("user", JSON.stringify(state.user));
            }
        })
    }
});

export const {setLogin, setRegister, getUser, clearUser, setCheckbox} = accessSlice.actions;
export default accessSlice.reducer;
