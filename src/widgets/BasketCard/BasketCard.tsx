import { FC } from 'react'
import s from './BasketCard.module.scss'
import { IBasket } from '../../entities/profile/model/types'

interface IProps {
 basketItem: IBasket
 deleteBasket: () => void
}

const BasketCard: FC<IProps> = ({basketItem, deleteBasket}) => {
 return <div className={s.BasketCard}>
  <img src={basketItem.img[0]} className={s.BasketCard__image} alt="" />
  <div className={s.BasketCard__info}>
   <div className={s.BasketCard__sum}>
    <h3 className={s.BasketCard__title}>{basketItem.title}</h3>
    <h2 className={s.BasketCard__price}>{basketItem.price} ₽</h2>
   </div>
   <div className={s.BasketCard__close} onClick={deleteBasket}>
    <img src="/img/close.svg" alt="" />
   </div>
  </div>
 </div>
}


export default BasketCard