import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services";
import {urls} from "../../configs";
import {Comment} from "../Comment/Comment";
import css from './comments.module.css';

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll(urls.comments).then(({data}) => setComments(data))
    }, [])

    return (
        <div className={css.comments}>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
            <Outlet/>
        </div>
    );
}

export {Comments};