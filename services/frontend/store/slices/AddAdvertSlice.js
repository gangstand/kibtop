import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    formStep: 1,
    category: null,

    isPhoneOpen: false,
    isPhoneError: false,
    isPhoneSuccess: false
}

const AddAdvertSlice = createSlice({
    name: 'addAdvert',
    initialState,
    reducers: {
        setAddAdvertFormStep(state, {payload}) {
            state.formStep = payload
        },
        setAddAdvertCategory(state, {payload}) {
            state.category = payload
        },

        setAddAdvertPhoneOpen(state, {payload}) {
            state.isPhoneOpen = payload
        },
        setAddAdvertPhoneError(state, {payload}) {
            state.isPhoneError = payload
        },
        setAddAdvertPhoneSuccess(state, {payload}) {
            state.isPhoneSuccess = payload
        },
    }
})

export const {  setAddAdvertFormStep, setAddAdvertCategory, 
                setAddAdvertPhoneOpen, setAddAdvertPhoneError, 
                setAddAdvertPhoneSuccess    } = AddAdvertSlice.actions


export const AddAdvertReducer = AddAdvertSlice.reducer