import { FC } from 'react'
import s from './ErrorAlert.module.scss'

interface IProps {
 title: string
}

const ErrorAlert: FC<IProps> = ({ title }) => {
 return <div className={s.ErrorAlert}>
  <div className={s.ErrorAlert__info}>
   <img src="/img/error.svg" alt="" />
   <p>{title}</p>
  </div>
 </div>
}


export default ErrorAlert