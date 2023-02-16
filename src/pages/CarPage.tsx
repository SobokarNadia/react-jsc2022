import React, {FC} from 'react';

import {CarDetails, CarForm, Cars} from "../components";

const CarPage: FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <CarDetails/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};