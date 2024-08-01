// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {IPosterImage} from "../../../interfaces/moviesInterfaceContainer/IPosterImage";
// import {IMovieImages} from "../../../interfaces/moviesInterfaceContainer/IMovieImages";
// import {movieService} from "../../../services/MovieService";
//
// interface IImageMovieState {
//     imageMovie: IPosterImage | null
// }
//
// let initialState:IImageMovieState = {
//     imageMovie: null
// }
//
// const getImageByMovie = createAsyncThunk<IMovieImages<IPosterImage>, string>(
//     'imageMovieSlice/getImageByMovie',
//     async (movieId, {rejectWithValue}) => {
//         try {
//             const {data} = await movieService.getMovieImages1(movieId)
//             return data
//         }catch (e) {
//             return rejectWithValue(e)
//         }
//     }
// )
//  let imageMovieSlice = createSlice({
//     name: 'imageMovieSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase(getImageByMovie.fulfilled, (state, action) => {
//             state.imageMovie = action.payload.posters
//         })
// })
//
// const {reducer: imageMovieRaducer, actions} = imageMovieSlice;
//
// const imageMovieActions = {
//     ...actions,
//     getImageByMovie
// }
//
// export {
//     imageMovieActions,
//     imageMovieRaducer
// }
export const asdfsdf = {}