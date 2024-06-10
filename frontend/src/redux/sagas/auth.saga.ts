import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  createAccountFailure,
  createAccountSuccess,
  loginAccountFailure,
  loginAccountSuccess,
} from "@/redux/slices/auth.slice";

import { AUTH_ENDPOINTS } from "@/redux/services/apiEndpoints";
import { ToastError, ToastSuccess } from "@/app/components/shared/Toasts";
import { postFormData } from "../services/apiClients/postFormData";

function* createAccountSaga(action: any) {
  const { userData, successCallback } = action.payload;
  const credential: any = {
    endpoint: AUTH_ENDPOINTS.register,
    userData,
  };

  try {
    const response: AxiosResponse = yield call(postFormData, credential);
    console.log("response", response);
    if (response) {
      let data: any = response.data;
      localStorage.setItem("userinfo", JSON.stringify(data?.user));
      yield put(createAccountSuccess(data?.user));
      successCallback();
      ToastSuccess(response.data);
    } else {
      ToastError(response);
    }
  } catch (err: any) {
    ToastError(err);
    yield put(createAccountFailure(err));
  }
}

function* loginAccountSaga(action: any) {
  const { userData, successCallback } = action.payload;
  const credential: any = {
    endpoint: AUTH_ENDPOINTS.login,
    userData,
  };

  try {
    const response: AxiosResponse = yield call(postFormData, credential);
    console.log("response", response);
    if (response) {
      console.log("response", response);
      let data: any = response.data;
      localStorage.setItem("userinfo", JSON.stringify(data?.user));
      yield put(loginAccountSuccess(data?.user));
      successCallback();
      ToastSuccess(response.data);
    }
  } catch (err: any) {
    ToastError(err.message);
    yield put(loginAccountFailure(err));
  }
}

function* watchAuthSaga() {
  yield takeEvery("authSlice/createAccountStart", createAccountSaga);
  yield takeEvery("authSlice/loginAccountStart", loginAccountSaga);
}

export default watchAuthSaga;
