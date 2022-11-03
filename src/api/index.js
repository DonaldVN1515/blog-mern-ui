import axios from 'axios';

const URL = 'https://blog-mern-donaldvn.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) =>
	axios.post(`${URL}/posts/updatde`, payload);
// export const deletePost = (payload) =>
// 	axios.post(`${URL}/posts/delete`, payload);
