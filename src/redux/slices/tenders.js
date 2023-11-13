import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchTenders = createAsyncThunk('tenders/fetchTender', async () => {
    const { data } = await axios.get('/tenders');
    return data;
})

export const fetchRemoveTender = createAsyncThunk('tenders/fetchRemoveTender', async (id) => axios.delete(`/tenders/${id}`)
);

const initialState = {
    tenders: {
        items: [],
        status: 'loading'
    }
};

const tendersSlice = createSlice({
    name: 'tenders',
    initialState,
    reducers: {},
    extraReducers: {
        //Отримання 
        [fetchTenders.pending]: (state) => {
            state.tenders.items = [];
            state.tenders.status = 'loading';
        },
        [fetchTenders.fulfilled]: (state, action) => {
            state.tenders.items = action.payload;
            state.tenders.status = 'loaded';
        },
        [fetchTenders.rejected]: (state) => {
            state.tenders.items = [];
            state.tenders.status = 'error';
        },
        //Видалення статті
        [fetchRemoveTender.pending]: (state, action) => {
            state.tenders.items = state.tenders.items.filter((obj) => obj._id !== action.meta.arg);
        }
    }
})

export const tendersReducer = tendersSlice.reducer;