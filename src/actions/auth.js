import * as AuthService from '../services/auth.js';

export const VALIDATE_SESSION_TOKEN_REQUEST = 'VALIDATE_SESSION_TOKEN_REQUEST';
export const VALIDATE_SESSION_TOKEN_ERROR = 'VALIDATE_SESSION_TOKEN_ERROR';
export const VALIDATE_SESSION_TOKEN_SUCCESS = 'VALIDATE_SESSION_TOKEN_SUCCESS';

export const validateSessionToken = (jwt) => {
    const request = AuthService.validateSessionToken(jwt);

    return (dispatch) => {
        dispatch({
            type: VALIDATE_SESSION_TOKEN_REQUEST
        });

        request.then(
            response => response.json().then((payload) =>
                dispatch({
                    type: VALIDATE_SESSION_TOKEN_SUCCESS,
                    payload,
                })
            ).catch((error) => dispatch({
                type: VALIDATE_SESSION_TOKEN_ERROR,
                error,
            }))
        ).catch(
            error => dispatch({
                type: VALIDATE_SESSION_TOKEN_ERROR,
                error,
            })
        );
    };
};
