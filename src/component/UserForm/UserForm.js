import React, {useState} from 'react';
import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {userService} from "../../services";
import {userValidator} from "../../validators";


const UserForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onBlur",
        resolver: joiResolver(userValidator)
    });

    const [user, setUser] = useState();

    const submit = async (user) => {
        const {data} = await userService.create(user);
        setUser({...data});
    }


    return (<div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type={'text'} placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}

                <input type={'email'} placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}

                <button disabled={!isValid}>Add User</button>
            </form>
            {user && <div>
                <div>id: {user.id}</div>
                <div>name: {user.name}</div>
                <div>username: {user.username}</div>
                <div>email: {user.email}</div>
            </div>}
        </div>
    );
};

export {UserForm};