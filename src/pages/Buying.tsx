import { FC, useEffect, useState } from "react";
import { BuyingComponent, BuyingFetch, deleteBasketContract, getSum } from "../processes/buying";
import { useAppDispatch, useAppSelector } from "../app/appStore";
import { Navigate } from "react-router-dom";
import { generatorKey } from "../shared/helpers/generator";





const Buying: FC = () => {
 const { contract } = useAppSelector(state => state.buyingSlice)
 const dispatch = useAppDispatch()
 const [isRedirect, setIsRedirect] = useState<boolean>(false)
 const [isRedirectOrder, setIsRedirectOrder] = useState<boolean>(false)


 useEffect(() => {
  if (!contract.orders.length) setIsRedirectOrder(true)
 }, [contract])

 if (isRedirect) {
  return <Navigate to={`/success`} />
 }

 if (isRedirectOrder) {
  return <Navigate to={`/`} />
 }

 return <BuyingComponent buying={(name: string, lastname: string, email: string, location: string) => {
  dispatch(BuyingFetch({
   id: `${generatorKey()}`,
   orders: contract.orders,
   user: {
    name: name,
    lastname: lastname,
    email: email,
    location: location,
   },
   sum: contract.sum,
   date: new Date()
  }))
  setIsRedirect(true)
 }} contract={contract} deleteBasket={(id: string) => { 
  dispatch(deleteBasketContract(id)) 
  dispatch(getSum())
 }} />
}


export default Buying