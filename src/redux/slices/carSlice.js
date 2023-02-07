import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: [],
    errors: null,
    updateCar: null
}

const getAll = createAsyncThunk(
    'carSlice/getall',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectedWithValue}) => {
        console.log('car', car)
        try {
            const {data} = await carService.create(car);
            return data;
        } catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);

const updateCar = createAsyncThunk(
    'carSlice/updateCar',
    async ({car, id}, {rejectedWithValue}) => {
        try {
            const {data} = await carService.update(car, id);
            return {data};
        } catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectedWithValue}) => {
        try {
            const {data} = await carService.delete(id);
            return {data};
        } catch (e) {
            return rejectedWithValue(e.return.data)
        }
    }
);

const carSlice = createSlice({
        name: 'carSlice',
        initialState,
        reducers: {
            setUpdateCar: (state, action) => {
                state.updateCar = action.payload;
            }
        },
        extraReducers: builder =>
            builder
                .addCase(getAll.fulfilled, (state, action) => {
                    state.cars = action.payload;
                })
                .addCase(getAll.rejected, (state, action) => {
                    state.errors = action.payload;
                })
                .addCase(createCar.fulfilled, (state, action) => {
                    console.log('!', action.payload)
                    state.cars = [...state.cars, action.payload]
                })
                .addCase(createCar.rejected, (state, action) => {
                    state.errors = action.payload;
                })
                .addCase(updateCar.fulfilled, (state, action) => {
                    const {data} = action.payload
                    state.cars = state.cars.map(el => (el.id === data.id) ? data : el);
                })
                .addCase(updateCar.rejected, (state, action) => {
                    state.errors = action.payload;
                })
                .addCase(deleteCar.fulfilled, (state, action) => {
                    const {data} = action.payload
                    let index = state.cars.findIndex(car => car.id === data.id)
                    state.cars.splice(index, 1)
                    state.cars = [...state.cars]
                })
                .addCase(deleteCar.rejected, (state, action) => {
                    state.errors = action.payload;
                })
    }
)

const {reducer: carReducer, actions: {setUpdateCar}} = carSlice;

const carActions = {
    getAll,
    createCar,
    updateCar,
    setUpdateCar,
    deleteCar
}

export {carReducer, carActions}