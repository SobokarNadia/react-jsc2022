import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div style={{minHeight:'100px', borderBottom:'1px black solid'}}>
            <Link to={'/cars'}>Cars</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/register'}>Register</Link>
        </div>
    )
}

export {Header};