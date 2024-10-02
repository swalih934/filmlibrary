import {createSlice} from "@reduxjs/toolkit"


const FilmSlice=createSlice({
    name:"Film",
    initialState:{
        Films:[]
    },
    reducers:{
        addFilm(state,action){
            state.Films.push(action.payload)
        },
        removeFilm(state,action){
            state.Films=state.Films.filter(item=>item.ID!=action.payload)
        },
        editFilms(state,action){
            state.Films=state.Films.filter(item=>item.ID!=action.payload.ID)
            state.Films.push(action.payload)
        }
    }
})

export default FilmSlice.reducer
export const {addFilm,removeFilm,editFilms}=FilmSlice.actions