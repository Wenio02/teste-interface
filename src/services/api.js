import axios from "axios";

 export const api = axios.create({
    baseURL: "http://localhost:3002",
})


api.interceptors.request.use(async config =>{
    const userData = await localStorage.getItem("codeburguer:userData")
    const token = JSON.parse(userData).token
    config.headers.Authorization = `Bearer ${token}`
    return config
    

})

export default api