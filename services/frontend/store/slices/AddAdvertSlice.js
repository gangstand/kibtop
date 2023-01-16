import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    formStep: 1
}

const AddAdvertSlice = createSlice({
    name: 'addAdvert',
    initialState,
    reducers: {
        setAddAdvertFormStep(state, {payload}) {
            state.formStep = payload
        }
    }
})

export const {setAddAdvertFormStep} = AddAdvertSlice.actions


export const AddAdvertReducer = AddAdvertSlice.reducer