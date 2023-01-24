import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {commentValidator} from "../../validators";
import {commentService} from "../../services";

const CommentForm = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: 'onBlur',
        resolver: joiResolver(commentValidator)
    });

    const [comment, setComment] = useState(null);

    async function submit(comment) {
        const {data} = await commentService.create(comment);
        setComment({...data});
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}

                <input type={'email'} placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}

                <input type={'text'} placeholder={'body'} {...register('body')}/>
                {errors.body && <span>{errors.body.message}</span>}

                <button disabled={!isValid}>Add comment</button>
            </form>

            {comment && <div>
                <div>id: {comment.id}</div>
                <div>name: {comment.name}</div>
                <div>email: {comment.email}</div>
                <div>body: {comment.body}</div>
            </div>}
        </div>
    );
};

export {CommentForm};