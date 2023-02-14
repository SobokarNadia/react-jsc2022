import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import {authService} from "../../services";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {register, handleSubmit, reset} = useForm();
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const submit = async (cred) => {
        try{
            await authService.auth(cred);
            navigate('/cars');
            reset();
        }catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>login</button>
            {error && <div>{error.detail}</div>}
        </form>
    )
}

export {LoginPage};