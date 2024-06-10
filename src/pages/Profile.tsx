import { FC } from "react"
import { OrdersComponent } from "../entities/profile"
import { useAppDispatch, useAppSelector } from "../app/appStore"
import { deleteOrderFetch } from "../entities/profile/actions/profileAction"




const Profile: FC = () => {
 const orders = useAppSelector(state => state.profileSlice.orders)
 const dispatch = useAppDispatch()
 return <> 
 <OrdersComponent deleteOrder={(id: string) => dispatch(deleteOrderFetch(id))} contracts={orders}/>
 </>
}


export default Profile