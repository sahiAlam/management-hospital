import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "@/redux/rootSaga";
import { persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
// const persistConfig = {
//   key: "root",
//   storage: localStorage, // Use localStorage for persistence (can also use sessionStorage)
// };

// const persistedReducer = persistReducer(peristConfig, rootReducer);
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware),
});
// const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
