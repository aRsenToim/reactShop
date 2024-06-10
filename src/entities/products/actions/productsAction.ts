import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { productsApi } from "../api/productsApi"
import { setError, setProduct, setProductCards } from "../model/productsSlice"
import { IProduct, IProductCard } from "../model/types"




export const setProductCardsFetch = () => {
 return (dispatch: AppDispatch) => {
  productsApi.getProductCards().then((data: IProductCard[]) => {
   dispatch(setProductCards(data))
  }).catch((error: AxiosError | Error) => dispatch(setError(error.message)))
 }
}

export const setProductFetch = (id: string) => {
 return (dispatch: AppDispatch) => {
  productsApi.getProduct(id).then((data: IProduct) => {
   dispatch(setProduct(data))
  }).catch((error: AxiosError | Error) => dispatch(setError(error.message)))
 }
}