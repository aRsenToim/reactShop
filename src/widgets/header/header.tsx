import { FC } from 'react'
import s from './header.module.scss'
import { NavLink } from 'react-router-dom'



const Header: FC = () => {
 return <div className={s.Header}>
  <NavLink to=''>
   <img className={s.Header__logo} src="/img/logo.svg" alt="" />
  </NavLink>
  <ul className={s.Header__navlink}>
   <li>
    <NavLink to='/profile'>
     <img src="/img/profile.svg" alt="" />
    </NavLink>
   </li>
   <li>
    <NavLink to='/basket'>
     <img src="/img/basket.svg" alt="" />
    </NavLink>
   </li>
  </ul>
 </div>
}

export default Header