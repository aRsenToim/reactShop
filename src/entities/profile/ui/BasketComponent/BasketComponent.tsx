import { FC } from 'react'
import { IOrder } from '../../model/types'
import BasketCard from '../../../../widgets/BasketCard/BasketCard'
import s from './BasketComponent.module.scss'
import Button from '../../../../widgets/Button/button'

interface IProps {
 basketCards: IOrder[]
 deleteBasket: (id: string) => void
 sum: number
 clear: () => void
 buy: (orders: IOrder[]) => void
}

const BasketComponent: FC<IProps> = ({ basketCards, sum, deleteBasket, clear, buy }) => {
 return <div className={s.BasketComponent}>
  {!basketCards.length ? <div className={s.BasketComponent__empty}>
   <img src='/img/emptyBasket.svg' />
   <div className={s.BasketComponent__emptyInfo}>
    <h1>Корзина пустая</h1>
    <p className={s.BasketComponent__emptyDesc}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
   </div>
  </div> : <div>
   <div className={s.BasketComponent__title}>
    <h1 className={s.BasketComponent__titleText}>Ваша корзина:</h1>
   </div>
   <div className={s.BasketComponent__items}>
    {basketCards.map(item => <BasketCard key={item.id} deleteBasket={() => { deleteBasket(item.id) }} basketItem={item} />)}
   </div>
   <div className={s.BasketComponent__footer}>
    <hr className={s.BasketComponent__hr} />
    <div className={s.BasketComponent__sum}>
     <h2>Итоговая сумма:</h2>
     <h2>{sum} руб.</h2>
    </div>
    <div className={s.BasketComponent__buttons}>
     <Button onclick={() => { buy(basketCards) }} title='Оформить заказ' color='#fff' bg_color='#a73afd' />
     <Button onclick={clear} title='Отчистить все' color='#222' mg='0px' bg_color='#ccc' />
    </div>
   </div>
  </div>}
 </div>
}


export default BasketComponent