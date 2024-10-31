import { configureStore } from "@reduxjs/toolkit";
import {
  productAddReducer,
  productAllReducer,
  productCategoryReducer,
  productDetailReducer,
  productSearchReducer,
} from "./product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    productAllState: productAllReducer,
    productDetailState: productDetailReducer,
    productAddState: productAddReducer,
    productSearchState: productSearchReducer,
    productCategoryState: productCategoryReducer,
    cartState: cartSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
