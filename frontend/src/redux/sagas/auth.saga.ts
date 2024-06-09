import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  createAccountFailure,
  createAccountSuccess,
  loginAccountFailure,
  loginAccountSuccess,
} from "@/redux/slices/auth.slice";

import { AUTH_BASE_URL, AUTH_ENDPOINTS } from "@/redux/services/apiEndpoints";
import { ToastError, ToastSuccess } from "@/app/components/shared/Toasts";

function* createAccountSaga(action: any) {
  const { userData, successCallback } = action.payload;
  console.log("userData", userData);
  try {
    const res: AxiosResponse = yield axios.post(
      AUTH_BASE_URL + "/auth/local/register",
      userData
    );

    if (res) {
      let data: any = res.data;
      localStorage.setItem("userinfo", JSON.stringify(data?.user));
      yield put(createAccountSuccess(data?.user));
      successCallback();
      ToastSuccess("user-registered");
    }
  } catch (err: any) {
    ToastError(err.message);
    yield put(createAccountFailure(err));
  }
}

function* loginAccountSaga(action: any) {
  let { userData, successCallback } = action.payload;
  console.log("userData", userData);
  try {
    const res: AxiosResponse = yield axios.post(
      AUTH_BASE_URL + AUTH_ENDPOINTS.login,
      userData
    );

    if (res) {
      let data: any = res.data;
      localStorage.setItem("userinfo", JSON.stringify(data?.user));
      yield put(loginAccountSuccess(data?.user));
      successCallback();
      ToastSuccess("user-loggedin");
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
