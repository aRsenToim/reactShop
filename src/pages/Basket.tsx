import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/appStore"
import { clearBasketFetch, deleteBasketFetch } from "../entities/profile"
import BasketComponent from "../entities/profile/ui/BasketComponent/BasketComponent"
import { getBuyingFetch } from "../processes/buying/actions/buyingAction"
import { IOrder } from "../entities/profile/model/types"
import { Navigate } from "react-router-dom"





const Basket: FC = () => {
 const {basket, sum} = useAppSelector(state => state.profileSlice)
 const dispatch = useAppDispatch()
 const [isRedirect, setIsRedirect] = useState<boolean>(false)

 if (isRedirect) {
  return <Navigate to={`/buying`} />
 }

 return <div>
  <BasketComponent buy={(orders: IOrder[]) => {
   dispatch(getBuyingFetch(orders))
   setIsRedirect(true)
   }} clear={() => {dispatch(clearBasketFetch())}} deleteBasket={(id: string) => {dispatch(deleteBasketFetch(id))}} basketCards={basket} sum={sum}/>
 </div>
}



export default Basket