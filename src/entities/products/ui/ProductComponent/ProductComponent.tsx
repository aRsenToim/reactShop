import { FC, useEffect, useState } from 'react'
import s from './ProductComponent.module.scss'
import { IProduct } from '../../model/types'
import Button from '../../../../widgets/Button/button'

interface IProps {
 product: IProduct,
 addBasket: (size: number) => void
 deleteBasket: () => void
 isBasket: boolean
 buy: (size: number) => void
}

const ProductComponent: FC<IProps> = ({ product, isBasket, deleteBasket, addBasket, buy }) => {
 const [img, setImg] = useState<string>(product.img[0])
 const [sizeUser, setSizeUser] = useState<number>(product.sizes[0])
 useEffect(() => {
  if (product) {
   setImg(product.img[0])
   setSizeUser(product.sizes[0])
  }
 }, [product])

 
 return <div className={s.Product}>
  <div className={s.Product__img}>
   <div className={s.Product__carousel}>
    {product.img.map((img: string) => <img key={Math.ceil(Math.random() * 1000)} className={s.Product__carouselImg} onMouseOver={() => { setImg(img) }} src={img} alt='' />)}
   </div>
   <img className={s.Product__image} src={img} alt="" />
  </div>
  <div className={s.Product__info}>
   <h1 className={s.Product__title}>{product.title}</h1>
   <h2 className={s.Product__price}>{product.price} руб.</h2>
   <p className={s.Product__desc}>{product.description}</p>
   <div className={s.Product__sizes}>
    {product.sizes.map((size: number) =>
     <div key={size} onClick={() => { setSizeUser(size) }} className={size == sizeUser ? s.Product__sizeActive : s.Product__size}>
      {size}
     </div>
    )}
   </div>
   <div className={s.Product__buttons}>
    <Button title='Купить' mg='0px 15px 0px 0px' bg_color='#0a3241' onclick={() => {buy(sizeUser)}} color='#fff' />
    {!isBasket ? <Button title='Добавить в корзину' bg_color='#4dd4f5' color='#222' onclick={() => { addBasket(sizeUser) }} /> : <Button title='Убрать из корзины' bg_color='#ccc' color='#222' onclick={deleteBasket} />}
   </div>
  </div>
 </div>
}


export default ProductComponent