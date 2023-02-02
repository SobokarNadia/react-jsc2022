import React from 'react';

class Comment extends React.Component {
    render() {
        let {comment} = this.props;
        return (
            <div style={{margin: '15px 0'}}>
                <div>id - {comment.id}</div>
                <div>name - {comment.name}</div>
                <div>email - {comment.email}</div>
                <div>body - {comment.body}</div>
            </div>
        );
    }
}


export {Comment};