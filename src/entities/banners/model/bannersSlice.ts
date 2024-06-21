import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBanner } from "./types";


interface IInitialState {
 banners: IBanner[]
}

const initialState: IInitialState = {
 banners: [
  {
   title: "Купи кросы пжпжпжжп",
   desc: "Кросыы",
   img: "https://static.street-beat.ru/upload/resize_cache/iblock/585/500_500_1/gdk23yfubq95em0po5tp6iqonpuvobcw.jpg",
   id: 1,
  },
  {
   title: "Купи кросы пжпжпжжп",
   desc: "Кросыы",
   img: "https://static.street-beat.ru/upload/resize_cache/iblock/585/500_500_1/gdk23yfubq95em0po5tp6iqonpuvobcw.jpg",
   id: 2,
  },
  {
   title: "Кросыы",
   desc: "Кросыы",
   img: "https://static.street-beat.ru/upload/resize_cache/iblock/585/500_500_1/gdk23yfubq95em0po5tp6iqonpuvobcw.jpg",
   id: 3,
  },
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