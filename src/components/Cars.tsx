import React, {FC, useEffect} from 'react';

import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";

const Cars:FC = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll());
    }, [])

 return (
  <div>
      {cars.map(car => <Car car={car} key={car.id} />)}
  </div>
 );
};

export {Cars};