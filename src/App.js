import React from 'react';

import {PetsPage, CommentsPage, PostsPage, UserPage, CarPage,} from "./pages";
import {Routes, Route} from "react-router-dom";
import {Header} from "./components";
import {ReducerProvider} from "./hoc/ReducerProvider";


const App = () => {
    return (
        <div>
            <h2>Task 1:</h2>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <PostsPage/>
                <CommentsPage/>
            </div>
            <h2>Task 2:</h2>
            <PetsPage/>
            <hr/>
            <ReducerProvider>
                <Header/>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>}/>
                    <Route path={'/cars'} element={<CarPage/>}/>
                </Routes>
            </ReducerProvider>


        </div>
    );
}

export {App};