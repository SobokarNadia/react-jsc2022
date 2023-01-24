import {axiosServiceCars} from "./axiosService";
import {urls} from "../configs";

const carService = {
    getAll: () => axiosServiceCars.get(urls.cars),
    create: (car) => axiosServiceCars.post(urls.cars, car),
    update: (car,id) => axiosServiceCars.put(`${urls.cars}/${id}`, car),
    delete: (id) => axiosServiceCars.delete(`${urls.cars}/${id}`)
}

export {carService}