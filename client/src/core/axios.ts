import axios from "axios";

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common["token"] = window.localStorage.token;

(<any>window).axios = axios;

export default axios;