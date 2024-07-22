import { FC } from 'react'
import s from './ErrorComponent.module.scss'
import { LinkUI } from '../UI'



const ErrorComponent: FC = () => {
 return <div className={s.ErrorComponent}>
  <h1 className={s.ErrorComponent__title}>404</h1>
  <h2 className={s.ErrorComponent__desc}>Страница не найдена</h2>
  <LinkUI href='/' styles={{fs: '18px', mg: "10px", display: "block"}} content='Вернуться на главную страницу'/>
 </div>
}


export default ErrorComponent