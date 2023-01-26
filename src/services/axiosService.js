import axios, {create} from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

export {axiosService};

