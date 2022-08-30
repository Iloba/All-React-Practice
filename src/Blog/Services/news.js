import axios from "axios";
// const config = {     
//     headers: { 'content-type': 'multipart/form-data' }
// }
export const storePosts = (payload) => {
    return axios.post('http://127.0.0.1:8000/api/store-news', payload);
}

export const getPosts = () => {
    return axios.get('http://127.0.0.1:8000/api/all-news');
}