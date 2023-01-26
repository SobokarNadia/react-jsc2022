import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Layout} from "./layouts/Layout";
import {AlbumsPage, CommentPage, NotfoundPage, PostPage, TodosPage} from "./pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'todos'} element={<TodosPage/>} />
                    <Route path={'albums'} element={<AlbumsPage/>} />
                    <Route path={'comments'} element={<CommentPage/>}>
                        <Route path={':postId'} element={<PostPage/>}/>
                    </Route>
                </Route>
                <Route path={'*'} element={<NotfoundPage/>}/>
            </Routes>
        </div>
    );
}

export {App};