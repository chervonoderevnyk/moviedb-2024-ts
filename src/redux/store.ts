import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/moviesSlicesContainer/MovieSlice";
import {genreReducer} from "./slices/genresSlicesContainer/GenreSlice";
import {meReducer} from "./slices/MeSlice";
import {genreListReducer} from "./slices/genresSlicesContainer/GenreListSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        me: meReducer,
        genreList: genreListReducer,
    }
})

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export {
    store
}

export type {
    RootState,
    AppDispatch
}