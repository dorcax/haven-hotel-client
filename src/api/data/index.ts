import { useDispatch, useSelector } from "react-redux"
import type { store } from "./store"

export type AuthDispatch =typeof store.dispatch

// RootState describes what the data in the store looks like
export type RootState =ReturnType<typeof store.getState>

// AppDispatch describes the kind of actions your store can send (dispatch)
export const useAppDispatch =useDispatch.withTypes<AuthDispatch>()
export const useAppSelector =useSelector.withTypes<RootState>()