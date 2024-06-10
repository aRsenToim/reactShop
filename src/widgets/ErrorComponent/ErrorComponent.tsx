import { FC } from 'react'
import s from './ErrorComponent.module.scss'



const ErrorComponent: FC = () => {
 return <div className={s.ErrorComponent}>
  <h1 className={s.ErrorComponent__title}>404</h1>
  <h2 className={s.ErrorComponent__desc}>Страница не найдена</h2>
 </div>
}


export default ErrorComponent