import { FC, useState } from 'react'
import s from './CardProduct.module.scss'
import { NavLink } from 'react-router-dom'



interface IProps {
 id: string
 title: string
 price: number
 img: string[]
}
const CardProduct: FC<IProps> = ({ id, title, price, img }) => {
 const [image, setImage] = useState<string>(img[0])
 return <NavLink to={`/product/${id}`} className={s.Link}>
  <div className={s.Card} onMouseOver={() => { setImage(img[1]) }} onMouseOut={() => { setImage(img[0]) }}>
   <img className={s.Card__image} src={image} alt="" />
   <div className={s.Card__info}>
    <h4 className={s.Card__price}>{price} ₽</h4>
    <p className={s.Card__title}>{title}</p>
   </div>
  </div>
 </NavLink>
}


export default CardProduct