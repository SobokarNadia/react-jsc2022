import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Post} from "../Post/Post";
import {postActions} from "../../redux";

const Posts = () => {
    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(postActions.getAll())
    })

    return (
        <div style={{textAlign:'right'}}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export {Posts};