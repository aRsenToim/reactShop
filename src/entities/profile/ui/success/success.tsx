import { FC } from "react"
import s from './success.module.scss'
import { NavLink } from "react-router-dom"


const SuccessComponent: FC = () => {
 return <div className={s.SuccessComponent}>
  <img src="/img/Success.png" alt="" />
  <h1 className={s.SuccessComponent__title}>Заказ оформлен!</h1>
  <p className={s.SuccessComponent__desc}>Ваш заказ #18 скоро будет передан курьерской доставке</p>
  <NavLink to={'/'} className='Link'>
   <button className={s.SuccessComponent__button}>
    <img src="/img/back.svg" alt="" />
    На главную страницу
    </button>
  </NavLink>
 </div>
}


export default SuccessComponent