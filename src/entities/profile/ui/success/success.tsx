import { FC } from "react"
import s from './success.module.scss'
import { NavLink } from "react-router-dom"

interface IProps {
  title: string
  desc: string
}

const SuccessComponent: FC<IProps> = ({title, desc}) => {
 return <div className={s.SuccessComponent}>
  <img src="/img/Success.png" alt="" />
  <h1 className={s.SuccessComponent__title}>{title}</h1>
  <p className={s.SuccessComponent__desc}>{desc}</p>
  <NavLink to={'/'} className='Link'>
   <button className={s.SuccessComponent__button}>
    <img src="/img/back.svg" alt="" />
    На главную страницу
    </button>
  </NavLink>
 </div>
}


export default SuccessComponent