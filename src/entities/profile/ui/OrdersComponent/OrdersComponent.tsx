import { FC } from 'react'
import OrderCard from '../../../../widgets/OrderCard/OrderCard'
import s from './OrdersComponent.module.scss'
import { IContract } from '../../model/types'

interface IProps {
 contracts: IContract[]
 deleteOrder: (id: string) => void
}

const OrdersComponent: FC<IProps> = ({ contracts, deleteOrder }) => {
 return <div className={s.OrdersComponent}>
  {!contracts.length ? <div className={s.OrdersComponent__empty}>
   <img src='/img/nullOrders.svg' />
   <div className={s.OrdersComponent__emptyInfo}>
    <h1>Вы ничего не покупали</h1>
    <p className={s.OrdersComponent__emptyDesc}>Вы нищеброд?</p>
    <p className={s.OrdersComponent__emptyDesc}>Оформите хотя бы один заказ.</p>
   </div>
  </div> : <div>
   <h1 className={s.OrdersComponent__title}>Ваши заказы:</h1>
   <div className={s.OrdersComponent__items}>
    {contracts.map((contract) => <OrderCard key={contract.id} sum={contract.sum} deleteOrder={() => { deleteOrder(contract.id) }} user={contract.user} orders={contract.orders} />)}
   </div>
  </div>}
 </div>
}

export default OrdersComponent