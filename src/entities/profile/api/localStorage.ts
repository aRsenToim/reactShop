import { IOrder } from "../model/types"



export const localStorageApi = {
 keyOrders: "nikestore_order_680456235",
 keyBasket: "nikestore_basket_680456235",
 setOrders(items: IOrder[]){
  localStorage.setItem(this.keyOrders, JSON.stringify(items))
 },
 setBasket(items: string[]){
  localStorage.setItem(this.keyBasket, JSON.stringify(items))
 },
 getItems(key: string){
  const data = localStorage.getItem(key)
  return !data ? [] : JSON.parse(data)
 },
}