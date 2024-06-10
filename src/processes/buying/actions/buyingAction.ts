import { AppDispatch } from "../../../app/appStore"
import { localStorageApi } from "../../../entities/profile"
import { addOrderFetch, deleteBasketArrFetch } from "../../../entities/profile/actions/profileAction"
import { IContract, IOrder } from "../../../entities/profile/model/types"
import { getSum, setContract, setOrdersContract } from "../model/buyingSlice"


export const getBuyingFetch = (orders: IOrder[]) => {
 return (dispatch: AppDispatch) => {
  dispatch(setOrdersContract(orders))
  dispatch(getSum())
 }
}

export const BuyingFetch = (contract: IContract) => {
 return (dispatch: AppDispatch) => {
  dispatch(addOrderFetch(contract))
  dispatch(setContract({
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
  }))
  const arr: string[] = ['']
  localStorageApi.getItems(localStorageApi.keyOrders).forEach((item: IOrder) => {
   arr.push(item.id)
  })
  dispatch(deleteBasketArrFetch(arr))
 }
}

