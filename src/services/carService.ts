import {apiService, IRes} from "./apiService";

import {urls} from "../configs";
import {ICar} from "../interfaces";

const carService = {
    getAll: ():IRes<ICar[]> => apiService.get(urls.cars.cars),
    getById: (id:string):IRes<ICar> => apiService.get(urls.cars.byId(id)),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.cars, data),
    delete: (id:string): IRes<ICar> => apiService.delete(urls.cars.byId(id))
}

export {carService}