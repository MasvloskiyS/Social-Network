let initialState = {
    friendsList: [
        {
            id: 1,
            userName: 'Stanislaw',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: 'Online',
            online: true,
        },
        {
            id: 2,
            userName: 'Denis',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: 'Online',
            online: true,
        },
        {
            id: 3,
            userName: 'Ivanna',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: '8 minutes ago',
            online: false,
        },
        {
            id: 4,
            userName: 'Dima',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: '20.20.2018',
            online: false,
        },
        {
            id: 5,
            userName: 'Petya',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: '11.12.2019',
            online: false,
        },
        {
            id: 6,
            userName: 'Valera',
            avatarUrl: 'https://wallpaperaccess.com/full/167053.jpg',
            lastActivity: '3 hours ago',
            online: false,
        },
    ]
};
export const friendsReducer = (state = initialState, action) => {

    return state;
}
