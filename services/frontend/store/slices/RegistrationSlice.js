import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deskStep: 1,
    mobileStep: 1,
    isRegistered: false,
    isConfirmed: false,
    isLoading: false,
    error: {
        mobileStep: null,
        deskStep: null,
        name: null,
        message: null
    }
}

const RegistrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        deskStepIncrement(state) {
            state.deskStep++
        },
        deskStepDecrement(state) {
            if(state.deskStep > 1) state.deskStep--
        },
        setDeskStep(state, {payload}) {
            state.deskStep = payload.step
        },


        mobileStepIncrement(state) {
            state.mobileStep++
        },
        mobileStepDecrement(state) {
            if(state.mobileStep > 1) state.mobileStep--
        },
        setMobileStep(state, {payload}) {
            state.mobileStep = payload.step
        },

        
        setRegistrationError(state, {payload}) {
            state.error.deskStep = payload.deskStep
            state.error.mobileStep = payload.mobileStep
            state.error.name = payload.name
            state.error.message = payload.message
        },


        setRegistrationStatus(state, {payload}) {
            state.isRegistered = payload.bool
        },
        setRegistrationConfirm(state, {payload}) {
            state.isConfirmed = payload.bool
        },


        setRegistrationLoading(state, {payload}) {
            state.isLoading = payload.bool
        }
    }
})

export const {
        deskStepIncrement, 
        deskStepDecrement, 
        mobileStepIncrement, 
        mobileStepDecrement,
        setMobileStep,
        setDeskStep,
        setRegistrationError,
        setRegistrationStatus,
        setRegistrationConfirm,
        setRegistrationLoading

    } = RegistrationSlice.actions

export const RegistrationRducer = RegistrationSlice.reducer