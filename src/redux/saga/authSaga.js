import axios from 'axios';
import Swal from 'sweetalert2';
import * as actionTypes from "../action-types";
import { api_urls } from '../../utils/api-urls';
import { put, call, takeLeading } from 'redux-saga/effects';
import { access_token, refresh_token } from '../../utils/constant';

function* login(action) {
    try {
        const { payload } = action;
        console.log("Login Saga Payload ::: ", payload);

    } catch (error) {
        console.log("Login Saga Error ::: ", error);
    }
}

export default function* authSaga() {
    yield takeLeading(actionTypes.LOGIN, login);
}