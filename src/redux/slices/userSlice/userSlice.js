import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../../../services";

const initialState = {
    users: [],
    errors: null,
    loading: null,
    selectedUser: null,
    user: null
}

const getAll = createAsyncThunk(
    'userSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'userSlice/getById',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await userService.getById(id);
            return data;
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.selectedUser = action.payload
        }
    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [getAll.rejected]: (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        },
        [getAll.pending]: (state) => {
            state.loading = true;
        },
        [getById.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        [getById.loading]: (state) => {
            state.loading = false;
        },
        [getById.rejected]: (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        }
    }
});

const {reducer: userReducer, actions: {setUser}} = userSlice;

const userActions = {
    getAll,
    setUser,
    getById
}

export {userReducer, userActions}

