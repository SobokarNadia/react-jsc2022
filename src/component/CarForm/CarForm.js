import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {
    const dispatch = useDispatch();

    const {updateCar} = useSelector(state => state.cars);

    const {register, handleSubmit, formState: {errors, isValid}, reset, setValue} = useForm({
        mode: "onBlur",
        resolver: joiResolver(carValidator)
    });

    const submit =  async (car) => {
        if (updateCar) {
            await dispatch(carActions.updateCar({car, id:updateCar.id}))
            reset();
        } else {
            dispatch(carActions.createCar({car}));
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
}
export {CarForm}