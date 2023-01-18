import React, {useState} from 'react';
import {Posts, SpaceX, UserPosts, Users} from './components/index'


const App = () => {
    const [currentId, setCurrentId] = useState(null);

    return (
        <div>
            <h1>Task1:</h1>
            <Posts/>

            <h1>Task2:</h1>
            <SpaceX/>

            <h1>Task3:</h1>
            <Users setCurrentId={setCurrentId}/>
            {currentId && <UserPosts currentId={currentId}/>}
        </div>
    );
}

export {App};