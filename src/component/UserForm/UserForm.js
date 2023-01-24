import React from 'react';
import {useForm} from "react-hook-form";

const UserForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}, setValue} = useForm({mode: "onBlur"});

    const submit = (user) => {
        console.log(user)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={'text'} placeholder={'name'} {...register('name', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type={'text'} placeholder={'username'} {...register('username', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type={'email'} placeholder={'email'} {...register('email', {
                required: {
                    value: true,
                    message: 'required'
                }
            })}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Add User</button>
        </form>
    );
};

export {UserForm};