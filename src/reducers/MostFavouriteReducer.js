import { actions } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const favouritePostReducer = (state, action) => {
    switch (action.type) {
        case actions.favouritePost.FAVOURITE_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.favouritePost.FAVOURITE_DATA_FETCHED: {
            console.log(action.data.blogs)
            return {
                ...state,
                posts: action.data.blogs,
                loading: false,
            };
        }

        case actions.favouritePost.FAVOURITE_DATA_FETCH_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        }

        
        default: {
            return state;
        }
    }
};

export  { initialState, favouritePostReducer };