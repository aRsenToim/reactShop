import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBanner } from "./types";


interface IInitialState {
 banners: IBanner[] | null
 error: string
}

const initialState: IInitialState = {
 banners: null,
 error: ""
}

const bannersSlice = createSlice({
 name: "bannersSlice",
 initialState,
 reducers: {
  closeBanner(state, action: PayloadAction<number>) {
   state.banners?.splice(state.banners.indexOf(state.banners.find(item => item.id == action.payload) ?? {
    title: "",
    desc: "",
    img: "",
    id: 0,
   }), 1)
  },
  setBanners(state, action: PayloadAction<IBanner[]>){
   state.banners = action.payload
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  }
 }
})




export default bannersSlice.reducer
export const {closeBanner, setBanners, setError} = bannersSlice.actions