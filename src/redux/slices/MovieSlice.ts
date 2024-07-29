import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/moviesInterfaceContainer/IMovie";
import {IPagination} from "../../interfaces/moviesInterfaceContainer/IPagination";
import {movieService} from "../../services/MovieService";

interface IState{
    movies: IMovie[],
    totalPages: number
}

let initialState:IState={
    movies:[],
    totalPages: 0
};

const getAllMovies2 = createAsyncThunk<IPagination<IMovie>, string>(
    'movieSlice/getAllMovies2',
    async (page, {rejectWithValue})=> {
        try {
            const {data} = await movieService.getAllMovies1(page)
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

let movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAllMovies2.fulfilled, (state, action) =>{
                state.movies = action.payload.results;
                state.totalPages = action.payload.total_pages  // Зберігаємо загальну кількість сторінок
            })
});

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAllMovies2
}

export {
    movieReducer,
    movieActions
}