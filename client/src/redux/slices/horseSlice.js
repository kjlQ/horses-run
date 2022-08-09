import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    horses:[]
}

const horseReducer = createSlice({
    name: 'horse',
    initialState,
    reducers: {
        setHorses : (state,action) => {
            state.horses = action.payload
        }
    },
})

export const { setHorses } = horseReducer.actions

export default horseReducer.reducer