import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux/es/exports";
import userReducer from "./userSlice/slice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
