import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";

const Post = ({postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postsService.postById(postId).then(({data}) => setPost(data))
    }, [postId])

    return (
        <div>
            {post && <div>
                <div>id - {post.id}</div>
                <div>title - {post.title}</div>
                <div>text - {post.body}</div>
            </div>}
        </div>
    );
}

export {Post};