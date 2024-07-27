import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IMovie} from "../../interfaces/moviesInterfaceContainer/IMovie";
import {IPagination} from "../../interfaces/moviesInterfaceContainer/IPagination";
import {movieService} from "../../services/MovieService";

interface IState{
    movies: IMovie[]
}

let initialState:IState={
    movies:[]
};

const getAllMovies2 = createAsyncThunk<IPagination<IMovie>, void>(
    'movieSlice/getAllMovies2',
    async (_, {rejectWithValue})=> {
        try {
            const {data} = await movieService.getAllMovies1()
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
                state.movies = action.payload.results
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