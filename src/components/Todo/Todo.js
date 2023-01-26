import React from 'react';

import css from './todo.module.css'

const Todo = ({todo: {userId, title, completed}}) => {

    return (
        <div className={css.todo}>
            <div>User Id - {userId}</div>
            <div>Do - {title}</div>
            <div>Done? - {completed ? 'Yes' : 'No'}</div>
        </div>
    );
}

export {Todo};