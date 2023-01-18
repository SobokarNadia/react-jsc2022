import {axiosService} from "./axiosService";

const postService = {
    getPosts : () => axiosService.get('/posts'),
    getUserPosts: (userId) => axiosService.get(`/posts?userId=${userId}`)
}

export {postService}