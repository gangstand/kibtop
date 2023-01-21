import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    formStep: 1,
    category: null
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
        }
    }
})

export const {setAddAdvertFormStep, setAddAdvertCategory} = AddAdvertSlice.actions


export const AddAdvertReducer = AddAdvertSlice.reducer