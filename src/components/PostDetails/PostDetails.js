import React from 'react';

const PostDetails = ({postDetails}) => {
    const {id, body} = postDetails;
    return (
        <div>
            <h3>Text of chosen post:</h3>
            <div>{id} - {body}</div>
        </div>
    );
}

export {PostDetails};