import { configureStore } from "@reduxjs/toolkit";
import { subscriptionReducer, userReducer } from "./reducers/userReducer";
import { profileReducer } from "./reducers/profileReducer";
import { courseReducer } from "./reducers/courseReducer";
import { adminReducer } from "./reducers/adminReducer";
import { otherReducer } from "./reducers/otherReducer";

export const server = import.meta.env.VITE_SERVER_URI;

const store = configureStore({
  reducer: {
    user: userReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription: subscriptionReducer,
    admin: adminReducer,
    other: otherReducer,
  },
});

export default store;
