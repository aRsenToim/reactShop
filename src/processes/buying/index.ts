import { BuyingFetch } from "./actions/buyingAction";
import buyingSlice, { deleteBasketContract, getSum, setContract, setOrdersContract } from "./model/buyingSlice";
import BuyingComponent from "./ui/buyingComponent/buyingComponent";




export {
 buyingSlice, setContract, setOrdersContract,
 BuyingFetch, BuyingComponent, deleteBasketContract, getSum
}
