import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";

const CarDetails: FC = () => {
    const {id} = useParams<{ id: string }>();

    const dispatch = useAppDispatch();
    const {chosenCar} = useAppSelector(state => state.cars);

    useEffect(() => {
        dispatch(carActions.getById(id!));
    }, [id])

    return (
        <div>
            {chosenCar && <div>{chosenCar?.id}: {chosenCar?.brand}</div>}
        </div>
    );
};

export {CarDetails};