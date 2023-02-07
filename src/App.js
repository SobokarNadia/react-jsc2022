import React from 'react';

import {Header, Posts, Users} from "./components";

const App = () => {
    return (
        <div>
            <Header/>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <Users/>
                <Posts/>
            </div>
        </div>
    );
}

export {App};