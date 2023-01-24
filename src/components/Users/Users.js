import React, {useEffect, useState} from 'react';

import {usersService} from "../../services";
import {User} from "../index";

const Users = ({setCurrentId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getUsers().then(value => value.data).then(value => setUsers(value))
    }, []);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} setCurrentId={setCurrentId}/>)}
        </div>
    );
}

export {Users};