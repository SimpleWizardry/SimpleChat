import axios from "../../core/axios";
import {PostDataType} from "../../redux/action-creators/user";

export default {
    signIn: (postData: PostDataType) => axios.post("/user/signin", postData),
    signUp: (postData: PostDataType) => axios.post("/user/signup", postData),
    getMe: () => axios.get("/user/me"),
    // verifyHash: hash => axios.get("/user/verify?hash=" + hash),
    // findUsers: query => axios.get("/user/find?query=" + query)
};