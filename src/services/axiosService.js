import {baseUrlCars, baseUrlJPl} from "../configs";
import axios from "axios";

const axiosServiceJPl = axios.create({baseURL: baseUrlJPl})
const axiosServiceCars = axios.create({baseURL: baseUrlCars});

export {axiosServiceJPl, axiosServiceCars}