import {axiosServiceJPl} from "./axiosService";
import {urls} from "../configs";

const userService = {
    create: (user) => axiosServiceJPl.post(urls.users, user)
}

export {userService}