import { actions } from "../actions";

const initialState = {
    user: null,
    blogs: [],
    loading: false,
    error: null,
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.profile.DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                user: action.data,
                blogs: action.data.blogs,
            };
        }

        case actions.profile.DATA_FETCH_ERROR: {
            console.log(action.error)
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        case actions.profile.USER_DATA_EDITED: {
            
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    bio: action.data.user.bio,
                },
            };
        }

        case actions.profile.IMAGE_UPDATED: {
            console.log(action.data)
            return {
                ...state,
                loading: false,
                user: {
                    ...state.user,
                    avatar: action.data.user.avatar,
                },
            };
        }

        default: {
            return state;   
        }
    }
};

export { initialState, profileReducer };