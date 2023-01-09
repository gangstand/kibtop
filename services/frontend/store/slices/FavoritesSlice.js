import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWarnOpen: false,

    isLoading: false
}

const FavoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setFavoritesWarnOpen(state, {payload}) {
            state.isWarnOpen = payload
        },

        setFavoritesLoading(state, {payload}) {
            state.isLoading = payload
        }
    }
})

export const {setFavoritesWarnOpen, setFavoritesLoading} = FavoritesSlice.actions

export const likeAdvertThunk = (id, category) => async dispatch => {
    dispatch(setFavoritesLoading(true))
}

export const FavoritesReducer = FavoritesSlice.reducer