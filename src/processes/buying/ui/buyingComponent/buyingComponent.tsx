import { FC, useState } from 'react'
import s from './buyingComponent.module.scss'
import { IContract } from '../../../../entities/profile/model/types'
import Button from '../../../../widgets/Button/button'
import Input from '../../../../widgets/Input/Input'
import BasketCard from '../../../../widgets/BasketCard/BasketCard'
import ErrorAlert from '../../../../widgets/ErrorAlert/ErrorAlert'


interface IProps {
 contract: IContract
 deleteBasket: (id: string) => void
 buying: (name: string, lastname: string, email: string, location: string) => void
}

const BuyingComponent: FC<IProps> = ({ contract, deleteBasket, buying }) => {
 const [name, setName] = useState<string>("")
 const [lastname, setLastName] = useState<string>("")
 const [email, setEmail] = useState<string>("")
 const [location, setLocation] = useState<string>("")

 //Error alert
 const [errorText, setErrorText] = useState<string>('')
 const [isError, setIsError] = useState<boolean>()


 const BuyingProduct = () => {
  if (!name || !lastname || !email || !location) {
   setErrorText('Введите все поля')
   setIsError(true)
   return;
  }
  buying(name, lastname, email, location)
 }

 return <div className={s.BuyingComponent}>
  <div className={s.BuyingComponent__forms}>
   <div className={s.BuyingComponent__orders}>
    <div className={s.BuyingComponent__ordersHeader}>
     <h1 className={s.BuyingComponent__title}>Офромление заказа:</h1>
    </div>
    <div className={s.BuyingComponent__ordersItems}>
     {contract.orders.map((order) => <BasketCard key={order.id} basketItem={order} deleteBasket={() => { deleteBasket(order.id) }} />)}
    </div>
   </div>
   {isError ? <ErrorAlert title={errorText} /> : undefined}
   <div className={s.BuyingComponent__form}>
    <Input placeholder='Введите имя' label='Ваше имя:' text={name} setText={(value: string) => setName(value)} />
    <Input placeholder='Введите фамилию' label='Ваша фамилия:' text={lastname} setText={(value: string) => setLastName(value)} />
    <Input placeholder='Введите email' label='Ваш email:' text={email} setText={(value: string) => setEmail(value)} />
    <Input placeholder='Введите место доставки' label='Место доставки:' text={location} setText={(value: string) => setLocation(value)} />
   </div>
  </div>
  <div className={s.BuyingComponent__buyCard}>
   <div className={s.BuyingComponent__buyCardText}>
    <p>Товары шт</p>
    <p>{contract.sum} Р</p>
   </div>
   <div className={s.BuyingComponent__buyCardText}>
    <p>Скидка 3%</p>
    <p>{contract.sum * 0.03} Р</p>
   </div>
   <div className={s.BuyingComponent__buyCardText}>
    <h1>Итого</h1>
    <h1>{contract.sum - (contract.sum * 0.05)} Р</h1>
   </div>
   <div className={s.BuyingComponent__buttons}>
    <Button width='100%' title='Оформить заказ' onclick={BuyingProduct} color='#fff' bg_color='rgb(10, 50, 65)' mg='10px 0px 0px 0px' />
   </div>
  </div>
 </div>
}


export default BuyingComponent