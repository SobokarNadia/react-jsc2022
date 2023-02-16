import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {ICar} from "../../interfaces";
import {carService} from "../../services";


interface IState {
    cars: ICar[],
    chosenCar: ICar | null
}

const initialState: IState = {
    cars: [],
    chosenCar: null
};

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const getById = createAsyncThunk<ICar, string>(
    'carSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await carService.getById(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
);

const create = createAsyncThunk<ICar, {car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue, dispatch}) => {
        try {
            const {data} = await carService.create(car);
            await dispatch(carActions.getAll());
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const deleteCar = createAsyncThunk<void, string>(
    'carSlice/deleteCar',
    async (id, {rejectWithValue, dispatch}) => {
        try {
            await carService.delete(id);
            await dispatch(carActions.getAll());
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const carSlice = createSlice({
        name: 'carSlice',
        reducers: {},
        initialState,
        extraReducers: builder => builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(getById.fulfilled, (state, action) => {
                state.chosenCar = action.payload;
            })

    }
);

const carActions = {
    getAll,
    getById,
    create,
    deleteCar
}

const {reducer: carReducer} = carSlice;


export {carSlice, carReducer, carActions}