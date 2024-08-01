import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IGenres} from "../../../interfaces/genresInterfaceContainer/IGenres";
import {IGenre} from "../../../interfaces/genresInterfaceContainer/IGenre";
import {genreService} from "../../../services/GenreService";

interface IState{
    genres: IGenre[]
}

let initialState: IState= {
    genres:[]
}

const getAllGenres2 = createAsyncThunk<IGenres<IGenre>, void>(
    'genreSlice/getAllGenres2',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAllGenres1();
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllGenres2.fulfilled, (state, action)=>{
            state.genres = action.payload.genres
        })
})

const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    ...actions,
    getAllGenres2
}

export {
    genreReducer,
    genreActions
}
