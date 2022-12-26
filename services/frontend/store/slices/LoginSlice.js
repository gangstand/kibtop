import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: {
        name: null,
        message: null
    }
}

const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginError(state, {payload}) {
            state.error.name = payload.name
            state.error.message = payload.message
        },

        setLoginLoading(state, {payload}) {
            state.isLoading = payload.bool
        }
    }
})

export const { setLoginError, setLoginLoading } = LoginSlice.actions


export const LoginReducer = LoginSlice.reducer