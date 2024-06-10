import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductCard } from "./types";


interface IinitialState {
 productCards: IProductCard[] | null
 product: IProduct | null
 error: string
}

const initialState: IinitialState = {
 productCards: null,
 product: null,
 error: ""
}


const productsSlice = createSlice({
 name: "productsSlice",
 initialState,
 reducers: {
  setProductCards(state, action: PayloadAction<IProductCard[]>) {
   state.productCards = action.payload
  },
  setProduct(state, action: PayloadAction<IProduct>) {
   state.product = action.payload
  },
  setError(state, action: PayloadAction<string>) {
   state.error = action.payload
  }
 }
})


export default productsSlice.reducer
export const { setError, setProduct, setProductCards } = productsSlice.actions