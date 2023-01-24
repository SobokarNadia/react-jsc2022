import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, updateCar}) => {
    const {register, handleSubmit, formState: {errors, isValid}, reset, setValue} = useForm({
        mode: "onBlur",
        resolver: joiResolver(carValidator)
    });

    const submit = async (car) => {
        if (updateCar) {
            const {data} = await carService.update(car, updateCar.id);
            setCars(prev => prev.map(el => (el.id === data.id) ? data : el));
            reset();
        } else {
            const {data} = await carService.create(car);
            setCars(prev => [...prev, data]);
            reset();
        }
    }

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand);
            setValue('price', updateCar.price);
            setValue('year', updateCar.year);
        }
    }, [updateCar])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type={'text'} placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type={'text'} placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{!updateCar ? 'Add Car' : 'Update'}</button>
        </form>
    );
};

export {CarForm};