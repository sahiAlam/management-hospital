import { combineReducers } from "@reduxjs/toolkit";
import doctorsReducer from "@/redux/slices/doctors.slice";

const rootReducer = combineReducers({
  doctors: doctorsReducer,
});

export default rootReducer;
