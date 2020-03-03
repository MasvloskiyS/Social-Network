import axios from "axios";

 export const getUsers = () => {
     return axios.get(`https://social-network.samuraijs.com/api/1.0/users/`).then( users => users.data.items);
 };
 export const getMoreUsers = (usersCount) => {
     return  axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${usersCount}`)
         .then( users => users.data.items);
 };
 export const getUserProfile = (userId) => {
    return axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then( response => {
         return response.data
     })
 };