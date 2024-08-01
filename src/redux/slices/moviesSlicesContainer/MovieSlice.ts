import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IMovie } from "../../../interfaces/moviesInterfaceContainer/IMovie";
import { IPagination } from "../../../interfaces/moviesInterfaceContainer/IPagination";
import { movieService } from "../../../services/MovieService";
import { IPosterImage } from "../../../interfaces/moviesInterfaceContainer/IPosterImage";
import { IMovieImages } from "../../../interfaces/moviesInterfaceContainer/IMovieImages";

interface IState {
    movies: IMovie[],
    totalPages: number,
    imageMovie: IPosterImage | null,
    images: { [key: string]: IPosterImage[] }
}

let initialState: IState = {
    movies: [],
    totalPages: 0,
    imageMovie: null,
    images: {}
};

const getAllMovies2 =
    createAsyncThunk<IPagination<IMovie>, string>(
    'movieSlice/getAllMovies2',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getAllMovies1(page);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getImageByMovie =
    createAsyncThunk<IMovieImages, string>(
    'imageMovieSlice/getImageByMovie',
    async (movieId, { rejectWithValue }) => {
        try {
            const { data } =
                await movieService.getMovieImages1(movieId);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies2.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(getImageByMovie.fulfilled, (state, action) => {
                // Зберігаємо зображення для відповідного фільму як масив
                state.images[action.meta.arg] = action.payload.posters;
            })
});

const { reducer: movieReducer, actions } = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies2,
    getImageByMovie
}

export {
    movieReducer,
    movieActions
}

