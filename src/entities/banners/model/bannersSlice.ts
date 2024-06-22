import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBanner } from "./types";


interface IInitialState {
 banners: IBanner[]
}

const initialState: IInitialState = {
 banners: [
  {
   title: "Купи кросы от алсу",
   desc: "Кросы от алсу со скидкой 15%",
   img: "https://sun9-62.userapi.com/impg/mnBIwpY6xY7REsXJyfzec4drBwQQYcLS8C5jWA/3iultGoxxvc.jpg?size=648x1080&quality=96&sign=31c31c117911199613ffa0ebe4e2df93&type=album",
   id: 1,
  }
 ]
}

const bannersSlice = createSlice({
 name: "bannersSlice",
 initialState,
 reducers: {
  closeBanner(state, action: PayloadAction<number>) {
   state.banners.splice(state.banners.indexOf(state.banners.find(item => item.id == action.payload) ?? {
    title: "",
    desc: "",
    img: "",
    id: 0,
   }), 1)
  }
 }
})




export default bannersSlice.reducer
export const {closeBanner} = bannersSlice.actions