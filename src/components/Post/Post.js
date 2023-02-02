import React from 'react';

class Post extends React.Component {
    render() {
        const {post} = this.props;
        return (
            <div style={{margin: '15px 0'}}>
                <div>id - {post.id}</div>
                <div>user id - {post.userId}</div>
                <div>title - {post.title}</div>
                <div>body - {post.body}</div>
            </div>
        );
    }
}

export {Post};