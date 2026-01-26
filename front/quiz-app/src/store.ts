import { configureStore } from "@reduxjs/toolkit";
import entertainmentReducer from "./reducers/entertainmentReducer";
import educationReducer from "./reducers/educationReducer";
import selectedQuizReducer from "./reducers/selectedQuizReducer";
import activeQuizReducer from "./reducers/activeQuizReducer";
import answersReducer from "./reducers/answersReducer";

export const store = configureStore({
  reducer: {
    entertainmentQuizzes: entertainmentReducer,
    educationQuizzes: educationReducer,
    selectedQuiz: selectedQuizReducer,
    activeQuiz: activeQuizReducer,
    answers: answersReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
