import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../../../services";

const initialState = {
    posts: [],
    selectedPost: null,
    errors: null
}

const getAll = createAsyncThunk(
    'postSlice/getAll',
    async (_, {rejectedWithValue})=>{
        try {
            const {data} = await postService.getAll();
            return data;
        }catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
)

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers:{
        setSelected: (state, action) => {
            state.selectedPost = action.payload;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.posts = action.payload;
            })
            .addCase(getAll.rejected, (state, action)=>{
                state.errors = action.payload;
            })
    }
});

const {reducer: postReducer, actions: {setSelected}} = postSlice;

const postActions = {
    getAll,
    setSelected
}

export {postActions, postReducer}
