import { configureStore } from "@reduxjs/toolkit";
import entertainmentReducer from "./reducers/entertainmentReducer";
import educationReducer from "./reducers/educationReducer";

export const store = configureStore({
  reducer: {
    entertainmentQuizzes: entertainmentReducer,
    educationQuizzes: educationReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
