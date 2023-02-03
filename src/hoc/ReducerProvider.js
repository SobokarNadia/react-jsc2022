import React, {createContext, useReducer} from 'react';

import {carReducerFunc, init, initial, userReducerFunc} from "../reducers";

const ReducerContext = createContext(null);

const ReducerProvider = ({children}) => {
    const reducers = {
        userReducer: useReducer(userReducerFunc, null, initial),
        carReducer: useReducer(carReducerFunc, null, init)
    }

    return (
        <ReducerContext.Provider value={reducers}>
            <div>
                {children}
            </div>
        </ReducerContext.Provider>
    );
}

export {ReducerProvider, ReducerContext};