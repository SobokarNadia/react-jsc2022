import React from 'react';
import {useForm} from "react-hook-form";
import {carAction} from "../../reducers";
import {useAppReducer} from "../../hooks/useAppReducer";

const CarForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const [,dispatch] = useAppReducer(reducers => reducers.carReducer);

    const submit = (data) => {
      dispatch(carAction.ADD(data));
      reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'}  {...register('model')}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button>Add car</button>
        </form>
    );
}

export {CarForm};