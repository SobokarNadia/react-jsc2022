import React from 'react';

import css from './album.module.css'

const Album = ({album: {userId, title}}) => {
    return (
        <div className={css.album}>
            <div>User Id - {userId}</div>
            <div>Title - {title}</div>
        </div>
    );
}

export {Album};