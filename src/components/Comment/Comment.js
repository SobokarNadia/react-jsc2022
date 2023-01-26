import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './comment.module.css';

const Comment = ({comment: {postId, name, email, body}}) => {
    const navigate = useNavigate();

    return (
        <div className={css.comment}>
            <div>Post Id - {postId}</div>
            <div>Name - {name}</div>
            <div>Email - {email}</div>
            <div>{body}</div>
            <button onClick={() => navigate(postId.toString())}>Post</button>
        </div>
    );
}

export {Comment};