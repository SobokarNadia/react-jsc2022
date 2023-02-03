import React from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {usersAction} from "../../reducers";

const UserForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(reducers => reducers.userReducer);

    const submit = (data) => {
        dispatch(usersAction.ADD(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'surname'} {...register('surname')}/>
            <input type="text" placeholder={'age'} {...register('age', {valueAsNumber: true})}/>
            <button >Add user</button>
        </form>
    );

}

export {UserForm};