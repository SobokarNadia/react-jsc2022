import React from 'react';

const User = ({user, setCurrentId}) => {
    const {id, name, email} = user;

    return (
        <div>
            <h4>{id} - {name}</h4>
            <h6>{email}</h6>
            <button onClick={() => setCurrentId(id)}>Posts</button>
        </div>
    );
}

export {User};