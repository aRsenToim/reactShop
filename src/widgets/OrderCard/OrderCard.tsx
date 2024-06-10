import { FC, useState } from 'react'
import { IOrder } from '../../entities/profile/model/types'
import s from './OrderCard.module.scss'


interface IProps {
 user: {
  name: string
  lastname: string
  email: string
  location: string
 },
 orders: IOrder[],
 sum: number,
 deleteOrder: () => void
}

const OrderCard: FC<IProps> = ({ user, orders, deleteOrder, sum }) => {
 const [isOpen, setIsOpen] = useState<boolean>(false)
 return <div className={s.Card}>
  <div className={s.OrderCard}>
   <div className={s.OrderCard__items}>
    {orders.map(order => <div className={s.OrderCard__card} key={order.id}>
     <img className={s.OrderCard__image} src={order.img[0]} alt="" />
     <div className={s.OrderCard__info}>
      <h3 className={s.OrderCard__title}>{order.title}</h3>
      <h5 className={s.OrderCard__price}>{order.price} ₽</h5>
     </div>
    </div>)}
   </div>
   <div className={s.OrderCard__buttons}>
    <button className={s.OrderCard__button} onClick={deleteOrder}>
     <img src="/img/delete.svg" alt="" />
    </button>
    <button className={s.OrderCard__button} onClick={() => { setIsOpen(!isOpen) }}>
     {isOpen ? <img src="/img/closeInfo.svg" alt="" /> : <img src="/img/addInfo.svg" alt="" />}
    </button>
   </div>
  </div>
  {isOpen ? <div className={s.Card__desc}>
   <p className={s.Card__text}>Имя: {user.name}</p>
   <p className={s.Card__text}>Фамилия: {user.lastname}</p>
   <p className={s.Card__text}>Email: {user.email}</p>
   <p className={s.Card__text}>Место доставки: {user.location}</p>
   <p>Итоговая цена: {sum}</p>
  </div> : undefined}
 </div>
}

export default OrderCard 