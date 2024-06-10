import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IContract, IOrder } from "../../../entities/profile/model/types";

interface IinitialState {
 contract: IContract
}

const initialState: IinitialState = {
 contract: {
  id: "",
  orders: [
  ],
  user: {
   name: "",
   lastname: "",
   email: "",
   location: "",
  },
  sum: 0,
  date: null
 }
}

const BuyingSlice = createSlice({
 initialState,
 name: "BuyingSlice",
 reducers: {
  setOrdersContract(state, action: PayloadAction<IOrder[]>){
   state.contract.orders = action.payload
  },
  setContract(state, action: PayloadAction<IContract>){
   state.contract = action.payload
  },
  getSum(state){
   let sum = 0
   state.contract.orders.forEach((item) => {
    sum += item.price
   })
   state.contract.sum = sum
  },
  deleteBasketContract(state, action: PayloadAction<string>){
   const item = state.contract.orders.filter(item => item.id == action.payload)
   state.contract.orders.splice(state.contract.orders.indexOf(item[0]), 1)
  }
 }
})


export default BuyingSlice.reducer
export const {setContract, setOrdersContract, getSum, deleteBasketContract} = BuyingSlice.actions