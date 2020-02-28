const SET_PRELOADER = 'SET_PRELOADER';

let initialState = {
    preloader: false,
};
export const preloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRELOADER: {
            return {
                ...state, preloader: !state.preloader,
            }
        }
        default:
            return state;
    }

};
export const setPreloader = () => ({type: SET_PRELOADER});
