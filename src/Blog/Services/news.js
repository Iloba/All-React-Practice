import axios from "axios";
// const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
// }
const base_url = 'http://127.0.0.1:8000/api';
export const storePosts = (payload) => {
    return axios.post(`${base_url}/store-news`, payload);
}

export const getPosts = () => {
    return axios.get(`${base_url}/all-news`);
}


//No Longer in Use
export const getNewsCount = () => {
    return axios.get(`${base_url}/news-count`);
}