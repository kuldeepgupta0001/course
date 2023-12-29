import { configuration } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const store = configuration({
  reducer: {
    user: userReducer,
  },
});

export default store;

export const server = "Backend_Server_Link_Here";
