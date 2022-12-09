import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../services/AuthApi";


const initialState = {
    isAuthed: false,
    userId: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            const {userId} = action.payload;


            state.userId = userId;
            state.isAuthed = true;
        }
    }
});

export const authReducer = authSlice.reducer

export const {setAuth} = authSlice.actions

export const setAuthThunk = () => async dispatch => {
    const user = await AuthApi.auth()
    if(!!user) dispatch(setAuth(user))
}