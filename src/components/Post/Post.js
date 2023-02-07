import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id, title} = post;

    const dispatch = useDispatch();

    return (
        <div style={{margin:'10px'}}>
           <div>{id} - {title}</div>
            <button onClick={()=>dispatch(postActions.setSelected(post))}>Select</button>
        </div>
    );
}

export {Post};