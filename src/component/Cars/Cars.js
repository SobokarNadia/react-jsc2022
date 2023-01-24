import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {carService} from "../../services";

const Cars = ({cars, setUpdateCar, setCars}) => {
    const [deleteCar, setDeleteCar] = useState(null);

    useEffect(() => {
        const deleting = async () => {
            await carService.delete(deleteCar.id);
            setDeleteCar(null);
            setCars(prev => prev.filter(car => car.id !== deleteCar.id));
        }

        if (deleteCar) deleting();
    }, [deleteCar])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setDeleteCar={setDeleteCar}/>)}
        </div>
    );
};

export {Cars};