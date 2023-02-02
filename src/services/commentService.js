import {axiosService} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    getAll: () => axiosService.get(urls.comments)
}

export {commentService}