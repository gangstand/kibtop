import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../services/AuthApi";
import { serializeRegistrationErrors } from "../../services/tools/ApiFormsSerializers";
import { setRegistrationError } from "./RegistrationSlice";


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

export const registrationThunk = (email, password1, password2, name, city, file) => async dispatch => {
    AuthApi.registration(email, password1, password2, name, city, file)
        .then(data => {
            dispatch(setAuthThunk())
        }).catch(err => {
            console.log(err)
            const error = err.response.data

            const {name, message, step} = serializeRegistrationErrors(error)
            console.log(name, ':', message)

            dispatch(setRegistrationError({name, message, step}))
        })
}