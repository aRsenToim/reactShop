import { FC } from 'react'
import s from './loader.module.scss'



const Loader: FC = () => {
 return <img src="/img/loader.gif" className={s.Loader} alt="" />
}


export default Loader