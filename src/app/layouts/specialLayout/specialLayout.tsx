import { FC } from 'react'
import s from './specialLayout.module.scss'
import { Outlet } from 'react-router-dom'



const SpecialLayout: FC = () => {
 return <div className={s.SpecialLayout}>
  <Outlet/>
 </div>
}


export default SpecialLayout