import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const {selectedUser, user} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div style={{
            display: 'flex', justifyContent: 'space-between', minHeight: '100px', borderBottom: '1px solid' +
                ' black'
        }}>
            <div>{selectedUser && <div>
                <div>{selectedUser.id} - {selectedUser.name}</div>
                <div>Username: {selectedUser.username}</div>
                <div>Email: {selectedUser.email}</div>
                <div>Address: {selectedUser.address.city} st.{selectedUser.address.street}</div>
                <hr/>
                {user && <div>{user.id} - {user.name} - {user.email}</div>}
            </div>}
            </div>
            <div>{selectedPost && <div style={{textAlign: 'right', width: '40%', margin: 'auto'}}>
                <div>{selectedPost.id} - {selectedPost.title}</div>
                <div>{selectedPost.body}</div>
            </div>}
            </div>
        </div>)
}

export {Header};