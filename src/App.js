import React, {useEffect, useState} from 'react';
import {UserForm, CarForm, CommentForm, Cars} from "./component";
import {carService} from "./services";

const App = () => {
    const [cars, setCars] = useState([]);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => {
            setCars(value);
        });
    }, [])

    return (
        <div>
            <h1>Task 1:</h1>
            <UserForm/>
            <hr/>

            <h1>Task 2:</h1>
            <CommentForm/>
            <hr/>

            <h1>Task 3:</h1>
            <CarForm setCars={setCars} updateCar={updateCar} />
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setCars={setCars}/>
        </div>
    );
}

export {App};