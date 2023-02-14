import React, {useEffect} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useDispatch} from "react-redux";

import {carActions} from "./redux";
import {Layout, AuthRequireLayout} from "./layouts";
import {CarPage, LoginPage, RegisterPage} from "./pages";


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [])

    return (
        <Routes>
            <Route path={'/'} element={ <Layout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>

                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>

        </Routes>

    );
}

export {App};