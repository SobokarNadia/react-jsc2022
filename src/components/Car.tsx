import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import {ICar} from "../interfaces";
import {useDispatch} from "react-redux";
import {carActions} from "../redux";
import {useAppDispatch} from "../hooks";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>year : {year}</div>
            <div>price : {price}</div>
            <button onClick={() => navigate(id.toString())}>Details</button>
            <button onClick={() => dispatch(carActions.deleteCar(id.toString()))}>Delete</button>
        </div>
    );
};

export {Car};