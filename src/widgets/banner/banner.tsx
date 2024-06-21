import { FC } from 'react'
import s from './banner.module.scss'

interface IProps {
 img: string
 title: string
 desc: string
 close: () => void
}

const Banner: FC<IProps> = ({ img, title, desc, close }) => {
 return <div className={s.Banner}>
  <div className={s.Banner__content}>
   <img className={s.Banner__image} src={img} alt="" />
   <div className={s.Banner__info}>
    <h3>{title}</h3>
    <p>{desc}</p>
   </div>
  </div>
  <div className={s.Banner__close} onClick={close}>X</div>
 </div>
}


export default Banner