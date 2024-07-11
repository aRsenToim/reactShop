import { FC, useEffect } from 'react'
import s from './baseLayout.module.scss'
import { Outlet } from 'react-router-dom'
import Header from '../../../widgets/header/header'
import { useAppDispatch, } from '../../appStore'
import { getProfileFetch } from '../../../entities/profile'
import Footer from '../../../widgets/footer/footer'




const BaseLayout: FC = () => {
 const dispatch = useAppDispatch()
 useEffect(() => {
  dispatch(getProfileFetch())
 }, [])

 return <div className={s.BaseLayout}>
  <Header/>
  <Outlet/>
  <Footer/>
 </div>
}


export default BaseLayout