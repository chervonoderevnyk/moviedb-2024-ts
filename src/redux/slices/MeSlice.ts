import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IUser} from "../../interfaces/IUser";
import {meService} from "../../services/MeService";

interface IState{
    me: IUser | null
}

let initialState:IState={
    me: null
}

const getMe = createAsyncThunk<IUser, void>(
    'meSlice/getMe',
    async (_, {rejectWithValue}) =>{
        try {
            const {data} = await meService.me()
            return data
        }catch (e) {
            return rejectWithValue(e)
        }
    }
)

const meSlice = createSlice({
    name: 'meSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMe.fulfilled, (state, action) =>{
            state.me = action.payload
        })
});

const {reducer: meReducer, actions} = meSlice;

const meActions = {
    ...actions,
    getMe
}

export {
    meReducer,
    meActions
}