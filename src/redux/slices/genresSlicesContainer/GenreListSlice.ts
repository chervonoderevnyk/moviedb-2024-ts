import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genreService} from "../../../services/GenreService";
import {IGenreList} from "../../../interfaces/genresInterfaceContainer/IGenreList";
import {IMovie} from "../../../interfaces/moviesInterfaceContainer/IMovie";

interface IGenreListState {
    moviesList: IMovie[],
    loading: boolean,
    error: string | null
}

const initialState: IGenreListState = {
    moviesList: [],
    loading: false,
    error: null
};

const getMoviesByGenre = createAsyncThunk<IGenreList<IMovie>, string>(
    'genreList/getMoviesByGenre',
    async (genreId, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getMoviesByGenre1(genreId);
            return data;
        } catch (e) {
            return rejectWithValue(e);
        }
    }
);

const genreListSlice = createSlice({
    name: 'genreList',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getMoviesByGenre.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMoviesByGenre.fulfilled, (state, action) => {
                state.loading = false;
                state.moviesList = action.payload.items;
            })
            .addCase(getMoviesByGenre.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
});

const {reducer: genreListReducer, actions} = genreListSlice;

const genreListActions = {
    ...actions,
    getMoviesByGenre
};

export {
    genreListReducer,
    genreListActions
};
