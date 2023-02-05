import {useContext} from "react";

import {ReducerContext} from "../hoc/ReducerProvider";

const useAppReducer = (item) => item(useContext(ReducerContext));

export {useAppReducer}
