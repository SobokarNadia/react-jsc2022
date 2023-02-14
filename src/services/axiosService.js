import axios from "axios";

import {baseUrlCars, baseUrlJPl} from "../configs";
import {authService} from "./authService";
import {createBrowserHistory} from "history";

const axiosServiceJPl = axios.create({baseURL: baseUrlJPl})
const axiosServiceCars = axios.create({baseURL: baseUrlCars});

const history = createBrowserHistory();

axiosServiceCars.interceptors.request.use((config)=>{
    if(authService.isAuthenticated()){
        const accessToken = authService.getAccessToken();
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

let isRefreshing = false;

axiosServiceCars.interceptors.response.use((config) => {
  return config
},
    async (error) => {
    const refresh = authService.getRefreshToken();

    if(error.response && error.response.status === 401 && refresh && !isRefreshing){
        isRefreshing = true;
        
        try{
            await authService.refresh(refresh);
        }catch (e) {
            authService.deleteTokens();
            history.replace('/login?expSession=true');
        }
        isRefreshing = false;
        return authService(error.config);
    }
    return Promise.reject(error)
    }
    )

export {axiosServiceJPl, axiosServiceCars, history}