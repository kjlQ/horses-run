import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    inProgress:null,
    horses:[],
    scoreBoard:[]
}

const horseReducer = createSlice({
    name: 'horse',
    initialState,
    reducers: {
        setHorses : (state,action) => {
            state.horses = action.payload
        },
        addToTheScoreBoard : (state,action) => {
            state.scoreBoard = [...state.scoreBoard , action.payload]
        },
        changeProgress:(state,action) => {
            state.inProgress = action.payload
        },
        resetScoreboard:(state) => {
            state.scoreBoard = []
        },
        resetHorses:(state) => {
            state.scoreBoard = []
        }
    },
})

export const { setHorses , addToTheScoreBoard ,changeProgress , resetScoreboard , resetHorses} = horseReducer.actions

export default horseReducer.reducer