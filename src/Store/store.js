import { configureStore } from "@reduxjs/toolkit";
import FilmSlice from "./Slice/FilmSlice";

const FilmStore=configureStore({
    reducer:{
        filmReducer:FilmSlice
    }
})

export default FilmStore