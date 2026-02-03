import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "../api.type";
import { useAppDispatch, useAppSelector } from ".";
import { useMemo } from "react";

export const emptyAuth: AuthState = {
  token: "",
};

export const initialState = (): AuthState => {
  const saved = localStorage.getItem("auth");
  return saved ? JSON.parse(saved) : emptyAuth;
};

export const auth = createSlice({
  name: "auth",
  initialState: initialState(),
  reducers: {
    setAuth: (_, { payload }: PayloadAction<AuthState>) => payload,
    clearAuth: () => emptyAuth,
  },
});

export const { setAuth, clearAuth } = auth.actions;

export const useAuthState = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const result = useMemo(() => {
    const isLoggedIn = !!auth.token;
    const clear = () => dispatch(clearAuth());
    const set = (auth: AuthState) => dispatch(setAuth(auth));
    return { auth, clear, set, isLoggedIn };
  }, [auth, dispatch]);
  return result;
};
