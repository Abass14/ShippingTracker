import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { apiService } from "../services/network";
import { StoreEnum } from "../../utils/enum/StoreEnum";
import { authReducer } from "./slices/authentication";

const store = configureStore({
    reducer: {
        [apiService.reducerPath]: apiService.reducer,
        [StoreEnum.Authentication]: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }).concat(apiService.middleware)
})

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store