import { createSlice } from "@reduxjs/toolkit"
import { AddAdvertApi } from "../../services/AddAdvertApi"
import { ProfileApi } from "../../services/ProfileApi"
import { setProfileDataThunk } from "./ProfileSlice"

const initialState = {
    formStep: 1,
    category: null,
    subCategoryText: null,

    isPhoneOpen: false,
    isPhoneError: false,
    isPhoneSuccess: false,
    isPhoneLoading: false,
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
        setAddAdvertSubCategoryText(state, {payload}) {
            state.subCategoryText = payload
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
        setAddAdvertPhoneLoading(state, {payload}) {
            state.isPhoneLoading = payload
        }
    }
})

export const {  setAddAdvertFormStep, setAddAdvertCategory, 
                setAddAdvertPhoneOpen, setAddAdvertPhoneError, 
                setAddAdvertPhoneSuccess, setAddAdvertPhoneLoading,
                setAddAdvertSubCategoryText    } = AddAdvertSlice.actions

export const addUserPhoneThunk = phone => async dispatch => {
    dispatch(setAddAdvertPhoneLoading(true))
    await ProfileApi.addUserPhone(phone)
        .then(() => {
            dispatch(setAddAdvertPhoneSuccess(true))
            dispatch(setAddAdvertPhoneLoading(false))
            dispatch(setProfileDataThunk())
        }).catch(() => {
            dispatch(setAddAdvertPhoneError(true))
            dispatch(setAddAdvertPhoneLoading(false))
        })
}

export const addAdvertThunk = (data, category, lang) => async dispatch => {
    await AddAdvertApi.createAdvert(data, category, lang)
}


export const AddAdvertReducer = AddAdvertSlice.reducer