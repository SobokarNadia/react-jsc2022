import {axiosService} from "./axiosService";

const usersService = {
    getUsers: () => axiosService.get('/users')
}

export {usersService}