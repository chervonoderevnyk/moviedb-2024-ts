import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlice";
import {genreReducer} from "./slices/GenreSlice";
import {meReducer} from "./slices/MeSlice";

const store = configureStore({
    reducer: {
        movies: movieReducer,
        genres: genreReducer,
        me: meReducer
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