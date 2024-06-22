import { AppDispatch } from "../../../app/appStore"
import { localStorageApi } from "../api/localStorage"
import { addBasket, addOrder, deleteBasket, deleteBasketArr, deleteOrder, setBasket, setOrders, sumBasket } from "../model/profileSlice"
import { IBasket, IContract, IOrder } from "../model/types"



export const getProfileFetch = () => {
 return (dispatch: AppDispatch) => {
  dispatch(setBasket(localStorageApi.getItems(localStorageApi.keyBasket)))
  dispatch(setOrders(localStorageApi.getItems(localStorageApi.keyOrders)))
  dispatch(sumBasket())
 }
}

 
export const addOrderFetch = (order: IContract) => {
 return (dispatch: AppDispatch) => {
  dispatch(addOrder(order))
  localStorageApi.setOrders([...localStorageApi.getItems(localStorageApi.keyOrders), order])
 }
}

export const clearBasketFetch = () => {
 return (dispatch: AppDispatch) => {
  dispatch(setBasket([]))
  localStorageApi.setBasket([])
  dispatch(sumBasket())
 }
}

export const addBasketFetch = (item: IBasket) => {
 return (dispatch: AppDispatch) => {
  dispatch(addBasket(item))
  localStorageApi.setBasket([...localStorageApi.getItems(localStorageApi.keyBasket), item])
  dispatch(sumBasket())
 }
}


export const deleteBasketFetch = (id: string) => {
 return (dispatch: AppDispatch) => {
  dispatch(deleteBasket(id))
  const arr = [...localStorageApi.getItems(localStorageApi.keyBasket)]
  arr.splice(arr.indexOf(arr.find(item => item.id == id)), 1)
  localStorageApi.setBasket(arr)
  dispatch(sumBasket()) 
 }
}

export const deleteBasketArrFetch = (items: string[]) => {
 return (dispatch: AppDispatch) => {
  dispatch(deleteBasketArr(items))
  const arr = localStorageApi.getItems(localStorageApi.keyBasket)
  items.forEach((elem: string) => {
   const item = arr.filter((item: IOrder) => item.id == elem)
   arr.splice(arr.indexOf(item[0]), 1)
  })
  localStorageApi.setBasket(arr)
 }
}

export const deleteOrderFetch = (id: string) => {
 return (dispatch: AppDispatch) => {
  dispatch(deleteOrder(id))
  const arr = [...localStorageApi.getItems(localStorageApi.keyOrders)]
  arr.splice(arr.indexOf(arr.find(item => item.id == id)), 1)
  localStorageApi.setOrders(arr)
 }
}