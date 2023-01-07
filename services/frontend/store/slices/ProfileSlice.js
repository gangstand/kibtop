import { createSlice } from "@reduxjs/toolkit";
import { ProfileApi } from "../../services/ProfileApi";

const initialState = {
    locale: {
        isCurrencyOpen: false,
        isLanguageOpen: false
    },
    email: null,
    name: null,
    city: null,
    avatar: null,
    surname: null,

    isSuccess: false,
    isLoading: false,

    isActivated: false

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
        },

        setProfileData(state, {payload}) {
            const {email, name, city, avatar, surname} = payload

            state.email = email,
            state.name = name,
            state.city = city,
            state.avatar = avatar
            state.surname = surname
        },

        setProfileEditingLoading(state, {payload}) {
            state.isLoading = payload
        },

        setProfileEditingSuccess(state, {payload}) {
            state.isSuccess = payload
        },

        setProfileEditingActivated(state, {payload}) {
            state.isActivated = payload
        }
    }
})

export const {setProfileCurrencyOpen, setProfileLanguageOpen,
             setProfileData, setProfileEditingLoading, 
             setProfileEditingSuccess, setProfileEditingActivated} = ProfileSlice.actions

export const setProfileDataThunk = () => async dispatch => {
    const user = await ProfileApi.getUserData().catch(err => null)
    if(!user) return
    dispatch(setProfileData({...user}))
}

export const editUserDataThunk = ({email, name, city, avatar}) => async dispatch => {
    dispatch(setProfileEditingLoading(true))
    await ProfileApi.editUserData(email, name, city, avatar)
        .then(() => {
            dispatch(setProfileEditingSuccess(true))
            dispatch(setProfileEditingLoading(false))

            const checkActivated = setInterval(async () => {
                await ProfileApi.getUserData().then((res) => {
                    console.log(res)
                    clearInterval(checkActivated)
                    dispatch(setProfileEditingActivated(true))
                }).catch((err) => {
                    
                })
            }, 3000)

        }).catch(err => {
            console.log(err);
            dispatch(setProfileEditingLoading(false))
        })

    
}

export const ProfileReducer = ProfileSlice.reducer