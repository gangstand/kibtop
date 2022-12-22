import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    deskStep: 1,
    mobileStep: 1,
    error: {
        step: null,
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
            state.error.step = payload.step
            state.error.name = payload.name
            state.error.message = payload.message
        }
    }
})

export const {
        deskStepIncrement, 
        deskStepDecrement, 
        mobileStepIncrement, 
        mobileStepDecrement,
        setRegistrationError

    } = RegistrationSlice.actions

export const RegistrationRducer = RegistrationSlice.reducer