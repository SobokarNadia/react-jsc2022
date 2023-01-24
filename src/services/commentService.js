import {axiosServiceJPl} from "./axiosService";
import {urls} from "../configs";

const commentService = {
    create: (comment) => axiosServiceJPl.post(urls.comments, comment)
}

export {commentService}