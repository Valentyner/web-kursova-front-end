import { configureStore } from "@reduxjs/toolkit";
import { tendersReducer } from "./slices/tenders.js";
import { authReducer } from "./slices/auth.js";

const store = configureStore({
  reducer: {
    tenders: tendersReducer,
    auth: authReducer,
  },
});

export default store;
