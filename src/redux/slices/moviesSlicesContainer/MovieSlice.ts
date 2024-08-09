import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IMovieDetails } from '../../../interfaces/moviesInterfaceContainer/IMovieDetails';
import { movieService } from '../../../services/MovieService';
import {IMovie} from "../../../interfaces/moviesInterfaceContainer/IMovie";
import {IPosterImage} from "../../../interfaces/moviesInterfaceContainer/IPosterImage";
import {IPagination} from "../../../interfaces/moviesInterfaceContainer/IPagination";
import {IMovieImages} from "../../../interfaces/moviesInterfaceContainer/IMovieImages";

interface IState {
    movies: IMovie[],
    totalPages: number,
    imageMovie: IPosterImage | null,
    images: { [key: string]: IPosterImage[] },
    movieDetails: IMovieDetails | null
}

let initialState: IState = {
    movies: [],
    totalPages: 0,
    imageMovie: null,
    images: {},
    movieDetails: null
};

const getAllMovies2 = createAsyncThunk<IPagination<IMovie>, string>(
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

const getImageByMovie = createAsyncThunk<IMovieImages, string>(
    'imageMovieSlice/getImageByMovie',
    async (movieId, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getMovieImages1(movieId);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const getDetailsByMovie = createAsyncThunk<IMovieDetails, string>(
    'movieSlice/getDetailsByMovie',
    async (movie_id, { rejectWithValue }) => {
        try {
            const { data } = await movieService.getDetailsByMovie1(movie_id);
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
                state.images[action.meta.arg] = action.payload.posters;
            })
            .addCase(getDetailsByMovie.fulfilled, (state, action) => {
                state.movieDetails = action.payload;
            })
});

const { reducer: movieReducer, actions } = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies2,
    getImageByMovie,
    getDetailsByMovie
};

export {
    movieReducer,
    movieActions
};

