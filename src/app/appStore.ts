import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { TypedUseSelectorHook } from "react-redux"
import { productsSlice } from "../entities/products"
import { profileSlice } from "../entities/profile"
import { buyingSlice } from "../processes/buying"
import { bannersSlice } from "../entities/banners"
import { addAskSlice } from "../entities/AddAsk"
import { faqSlice } from "../entities/faq"


const rootReducers = combineReducers({
 productsSlice,
 profileSlice,
 buyingSlice,
 bannersSlice, 
 addAskSlice,
 faqSlice
})


export const setupStore = () => {
 return configureStore({
  reducer: rootReducers
 })
}

export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']



export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;