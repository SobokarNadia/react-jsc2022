import React, {useEffect, useState} from 'react';

import {Post, PostDetails,} from '../index'
import {postService} from "../../services";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        postService.getPosts().then(value => value.data).then(value => setPosts(value))
    }, []);

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}

            <h2>All posts:</h2>
            {posts.map(post => <Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}
        </div>
    );
}

export {Posts};