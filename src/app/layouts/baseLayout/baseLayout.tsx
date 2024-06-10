import { FC, useEffect } from 'react'
import s from './baseLayout.module.scss'
import { Outlet } from 'react-router-dom'
import Header from '../../../widgets/header/header'
import { useAppDispatch, } from '../../appStore'
import { getProfileFetch } from '../../../entities/profile'




const BaseLayout: FC = () => {
 const dispatch = useAppDispatch()
 useEffect(() => {
  dispatch(getProfileFetch())
 }, [])

 return <div className={s.BaseLayout}>
  <Header/>
  <Outlet/>
 </div>
}


export default BaseLayout