import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../../services/AuthApi";
import { serializeLoginErrors, serializeRegistrationErrors } from "../../services/tools/ApiFormsSerializers";
import { setLoginError } from "./LoginSlice";
import { setDeskStep, setMobileStep, setRegistrationConfirm, setRegistrationError, setRegistrationLoading, setRegistrationStatus } from "./RegistrationSlice";


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
    dispatch(setRegistrationLoading({bool: true}))
    await AuthApi.registration(email, password1, password2, name, city, file)
        .then(data => {
            dispatch(setRegistrationStatus({bool: true}))

            dispatch(setDeskStep({step: 1}))
            dispatch(setMobileStep({step: 1}))

            dispatch(setRegistrationLoading({bool: false}))

            
            const checkAuthId = setInterval(() => {
                AuthApi.login(email, password1)
                    .then(data => {
                        clearInterval(checkAuthId)

                        dispatch(setRegistrationConfirm({bool: true}))
                        dispatch(setAuthThunk())

                    }).catch(err => {
                        // console.log(err);
                    })
            }, 4000)

        }).catch(err => {
            // console.log(err)
            const error = err.response.data

            const {name, message, deskStep, mobileStep} = serializeRegistrationErrors(error)
            // console.log(name, ':', message)

            dispatch(setRegistrationError({name, message, deskStep, mobileStep}))
        })
}

export const loginThunk = (email, password) => async dispatch => {
    await AuthApi.login(email, password)
        .then(data => {

            dispatch(setAuthThunk())
        }).catch(err => {
            const error = err.response.data

            const {name, message} = serializeLoginErrors(error)

            dispatch(setLoginError({name, message}))
        })
}