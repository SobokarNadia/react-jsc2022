import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../component";

const Layout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

export {Layout};