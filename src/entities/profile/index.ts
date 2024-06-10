import profileSlice, { deleteBasket, addBasket, addOrder, sumBasket } from "./model/profileSlice";
import {getProfileFetch, addBasketFetch, deleteBasketFetch, clearBasketFetch, deleteBasketArrFetch} from './actions/profileAction'
import { localStorageApi } from "./api/localStorage";
import OrdersComponent from "./ui/OrdersComponent/OrdersComponent";


export {
 profileSlice,
 deleteBasket, addBasket, addOrder,
 getProfileFetch, addBasketFetch,
 deleteBasketFetch, sumBasket, clearBasketFetch,
 localStorageApi, deleteBasketArrFetch,
 OrdersComponent
}
