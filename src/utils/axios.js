import axios from 'axios';
import { posts, comments } from './rows';

axios.defaults.baseURL = process.env.REACT_APP_REQUEST;
axios.defaults.withCredentials = true;

export const getPosts = async (setState) => {
    setState([...posts]);
};

export const getPost = async (post_id, setState) => {
    setState([...posts].find(post => post.post_id === post_id));
};

export const getComments = async (post_id, setState) => {
    setState([...comments].filter(comment => comment.post_id === post_id));
};

// export const getPosts = async (setState) => {
//     axios.get('/api/posts')
//         .then((res) => {
//             const { data: { success, rows } } = res;
//             if (success) return setState(rows);
//             return console.error("getPosts : 불러오는데 실패하였습니다.");
//         })
//         .catch(console.error);
// };

// export const getPost = async (post_id, setState) => {
//     axios.get(`/api/posts/${post_id}`)
//         .then((res) => {
//             const { data: { success, row } } = res;
//             if (success) return setState(row);
//             return console.error("getPost : 불러오는데 실패하였습니다.");
//         })
//         .catch(console.error);
// };

// export const getComments = async (post_id, setComments) => {
//     axios.get(`/api/comments/${post_id}`)
//         .then((res) => {
//             const { data: { success, rows } } = res;
//             if (success) return setComments(rows);
//             return console.error("getComments : 불러오는데 실패하였습니다.");
//         })
//         .catch(console.error);
// };

// export const postComment = async (post_id, comment) => {
//     return axios.post(`/api/comments/${post_id}`, comment)
//         .then((res) => {
//             const { data: { success } } = res;
//             if (success) return true;
//             console.error('postComment : 댓글 등록에 실패하였습니다!');
//             return false;
//         })
//         .catch(console.error);
// };