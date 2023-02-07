import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name} = user;
    const dispatch = useDispatch();

    return (
        <div style={{margin:'10px'}}>
            <div>{id} - {name}</div>
            <button onClick={()=>dispatch(userActions.setUser(user))}>Details</button>
            <button onClick={()=>dispatch(userActions.getById({id}))}>getById</button>
        </div>
    );
}

export {User};