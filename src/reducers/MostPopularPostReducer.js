import { actions } from "../actions";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const mostPostReducer = (state, action) => {
    switch (action.type) {
        case actions.popularPost.POPULAR_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }

        case actions.popularPost.POPULAR_DATA_FETCHED: {
            console.log(action.data.blogs)
            return {
                ...state,
                posts: action.data.blogs,
                loading: false,
            };
        }

        case actions.popularPost.POPULAR_DATA_FETCH_ERROR: {
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

export  { initialState, mostPostReducer };