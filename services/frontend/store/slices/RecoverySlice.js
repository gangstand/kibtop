import { createSlice } from "@reduxjs/toolkit"
import { RecoveryApi } from "../../services/RecoveryApi"

const initialState = {
    isSended: false,
    isError: false,
    isSuccess: false,
    isLoading: false
}

const RecoverySlice = createSlice({
    name: 'recovery',
    initialState,
    reducers: {
        setRecoverySend(state, {payload}) {
            state.isSended = payload
        },

        setRecoveryError(state, {payload}) {
            state.isError = payload
        },

        setRecoverySuccess(state, {payload}) {
            state.isSuccess = payload
        },

        setRecoveryLoading(state, {payload}) {
            state.isLoading = payload
        }
    
    }
})

export const { setRecoverySend, setRecoveryError, setRecoverySuccess, setRecoveryLoading } = RecoverySlice.actions

export const confirmRecoveryThunk = ( {new_password, re_new_password, uid, token} ) => async dispatch => {
    dispatch(setRecoveryLoading(true))
    await RecoveryApi.confirmReset(new_password, re_new_password, uid, token)
        .then(data => {
            console.log(data);
            dispatch(setRecoverySuccess(true))
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryError(false))
        }).catch(err => {
            console.log(err)
            dispatch(setRecoveryLoading(false))
            dispatch(setRecoveryError(true))
        })
}

export const activateEmailThunk = ({uid, token}) => async dispatch => {
    await RecoveryApi.confirmEmail(uid, token).catch(err => null)
}

export const RecoveryReducer = RecoverySlice.reducer