import {
    VALIDATE_SESSION_TOKEN_ERROR,
    VALIDATE_SESSION_TOKEN_REQUEST,
    VALIDATE_SESSION_TOKEN_SUCCESS
} from '../actions/auth.js';

export const initialState = {
    loading: false,
    error: null,
    name: "",
    email: "",
};

export default function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case VALIDATE_SESSION_TOKEN_REQUEST:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case VALIDATE_SESSION_TOKEN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case VALIDATE_SESSION_TOKEN_SUCCESS:
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                email: action.payload.email,
                name: action.payload.name,
            };
        default:
            return state;
    }
}
