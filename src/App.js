import React, {useEffect} from 'react';
import {UserForm, CarForm, CommentForm, Cars} from "./component";

import {useDispatch} from "react-redux";
import {carActions} from "./redux";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
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
            <CarForm  />
            <hr/>
            <Cars />
        </div>
    );
}

export {App};