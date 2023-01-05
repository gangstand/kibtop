import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locale: {
        isCurrencyOpen: false,
        isLanguageOpen: false
    }
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileCurrencyOpen(state, {payload}) {
            state.locale.isCurrencyOpen = payload
        },

        setProfileLanguageOpen(state, {payload}) {
            state.locale.isLanguageOpen = payload
        }
    }
})

export const {setProfileCurrencyOpen, setProfileLanguageOpen} = ProfileSlice.actions

export const ProfileReducer = ProfileSlice.reducer