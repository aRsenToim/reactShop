import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBasket, IContract } from "./types";

interface IinitialState {
 orders: IContract[],
 basket: IBasket[],
 sum: number,
}

const initialState: IinitialState = {
 orders: [],
 basket: [],
 sum: 0,
}


const profileSlice = createSlice({
 name: "profileSlice",
 initialState,
 reducers: {
  setOrders(state, action: PayloadAction<IContract[]>) {
   state.orders = action.payload
  },
  setBasket(state, action: PayloadAction<IBasket[]>) {
   state.basket = action.payload
  },
  addOrder(state, action: PayloadAction<IContract>) {
   state.orders.push(action.payload)
  },
  addBasket(state, action: PayloadAction<IBasket>) {
   state.basket.push(action.payload)
  },
  deleteBasket(state, action: PayloadAction<string>) {
   const item = state.basket.filter(item => item.id == action.payload)
   state.basket.splice(state.basket.indexOf(item[0]), 1)
  },
  deleteBasketArr(state, action: PayloadAction<string[]>){
   const arr = [...state.basket]
   action.payload.forEach((elem: string) => {
    const item = arr.filter(item => item.id == elem)
    arr.splice(arr.indexOf(item[0]), 1)
   })
   state.basket = arr
  },
  sumBasket(state) {
   let sum = 0;
   state.basket.forEach((item) => {
    sum += item.price
   })
   state.sum = sum
  },
  deleteOrder(state, action: PayloadAction<string>){
   const item = state.orders.filter(item => item.id == action.payload)
   state.orders.splice(state.orders.indexOf(item[0]), 1)
  }
 }
})


export default profileSlice.reducer
export const { setBasket, setOrders, deleteOrder, deleteBasket, addBasket, deleteBasketArr, addOrder, sumBasket } = profileSlice.actions
