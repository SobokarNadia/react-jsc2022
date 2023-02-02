import React from 'react';

import {PetsPage, CommentsPage, PostsPage,} from "./pages";


const App = (props) => {
    return (
        <div>
            <h2>Task 1:</h2>
            <div style={{display: 'flex'}}>
                <PostsPage/>
                <CommentsPage/>
            </div>
            <h2>Task 2:</h2>
            <div>
                <PetsPage/>
            </div>
        </div>
    );
}

export {App};