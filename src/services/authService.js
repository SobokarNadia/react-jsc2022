import {axiosServiceCars} from "./axiosService";
import {urls} from "../configs";

const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';


const authService = {
    auth: async (data) => {
        const response = await axiosServiceCars.post(urls.auth.login, data);

        if (response.status === 200) {
            authService.setTokens(response.data)
        }

        return response
    },
    me: () => axiosServiceCars.get(urls.auth.me),
    refresh: async (refresh) => {
        const response = await axiosServiceCars.post(urls.auth.refresh, {refresh});

        if(response.status === 200){
            authService.setTokens(response.data)
        }

        return response;
    },

    setTokens: ({access, refresh}) => {
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },
    getAccessToken: () => localStorage.getItem(accessTokenKey),
    getRefreshToken: () => localStorage.getItem(refreshTokenKey),
    deleteTokens: () => {
        localStorage.removeItem(accessTokenKey)
        localStorage.removeItem(refreshTokenKey)
    },
    isAuthenticated: () => !!localStorage.getItem(accessTokenKey)


}

export {authService}