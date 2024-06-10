import { FC, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { useProduct } from "../shared/hooks/useProduct"
import { ProductComponent } from "../entities/products"
import Loader from "../widgets/loader/loader"
import { useAppDispatch, useAppSelector } from "../app/appStore"
import { addBasketFetch, deleteBasketFetch } from "../entities/profile"
import { getBuyingFetch } from "../processes/buying/actions/buyingAction"



const Product: FC = () => {
 const { id } = useParams()
 const product = useProduct(id ?? '')
 const [isBasket, setBasket] = useState<boolean>(false)
 const basket = useAppSelector(state => state.profileSlice.basket)
 const dispatch = useAppDispatch()
 const [isRedirect, setIsRedirect] = useState<boolean>(false)

 useEffect(() => {
  if (product) {
   basket.forEach(item => {
    setBasket(item.id == product?.id)
   })
  }
 }, [product, basket])

 if (isRedirect) {
  return <Navigate to={`/buying`} />
 }

 return <div>
  {product ? <ProductComponent
   buy={(size: number) => {
    
    dispatch(getBuyingFetch([{
      id: product.id,
      title: product.title,
      price: product.price,
      img: product.img,
      size,
     }]))
    setIsRedirect(true)
   }}
   isBasket={isBasket}
   deleteBasket={() => {
    dispatch(deleteBasketFetch(product.id))
    setBasket(false)
   }}
   addBasket={(size: number) => {
    dispatch(addBasketFetch({
     id: product.id,
     title: product.title,
     price: product.price,
     img: product.img,
     size
    }))

   }} product={product} /> : <Loader />}
 </div>
}


export default Product