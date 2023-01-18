import React from 'react';

const Post = ({post, setPostDetails}) => {
    const {id, title, body} = post;

    return (
        <div>
            <h4>{id} - {title}</h4>
            {setPostDetails ? <button onClick={() => setPostDetails(post)}>Text</button> : <p>{body}</p>}
        </div>
    );
}

export {Post};