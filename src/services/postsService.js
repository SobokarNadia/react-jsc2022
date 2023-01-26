import {axiosService} from "./axiosService";
import {urls} from "../configs";

const postsService = {
    postById: (id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postsService};