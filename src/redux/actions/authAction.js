import * as actionTypes from "../action-types";

export const login = (payload) => ({
    type: actionTypes.LOGIN,
    payload,
});

export const logout = (payload) => ({
    type: actionTypes.LOGOUT,
    payload,
});

export const register = (payload) => ({
    type: actionTypes.REGISTER,
    payload,
});

export const forgetPassword = (payload) => ({
    type: actionTypes.FORGET_PASSWORD,
    payload,
});