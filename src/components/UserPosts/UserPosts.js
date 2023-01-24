import React, {useEffect, useState} from 'react';

import {Post} from "../index";
import {postService} from "../../services/postService";

const UserPosts = ({currentId}) => {
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        postService.getUserPosts(currentId).then(value => value.data).then(value => setUserPosts(value))
    }, [currentId]);

    return (
        <div>
            {userPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}

export {UserPosts}