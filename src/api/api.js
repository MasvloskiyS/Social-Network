import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '5c97a4ce-ff4e-46f2-a9fe-86968dff0a95'
    }

});
export const authAPI = {
    getLogin() {
        return instance.get('/auth/me').then(loginData => loginData.data);
    }
};

export const usersAPI = {
    getUsers() {
        return instance.get(`/users/`).then(users => users.data.items);
    },
    getMoreUsers(usersCount) {
        debugger;
        return instance.get(`/users?count=${usersCount}`)
            .then(users => users.data.items);
    },
};
export const followUserAPI = {
    postFollowUser(userId) {
        return instance.post('/follow/' + userId)
    },
    deleteFollowUser(userId) {
        return instance.delete('/follow/' + userId);
    },
};

export const profileAPI = {
    getUserProfile(userId) {
        return axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            return response.data
        })
    },
}
