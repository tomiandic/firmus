import { configureStore } from "@reduxjs/toolkit";
import userProfileReducer from "./reducers/userProfileSlice";

export default configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
});
