import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/appStore";
import { setProductFetch } from "../../entities/products";




export function useProduct(id: string) {
 const dispatch = useAppDispatch()
 const { product } = useAppSelector(state => state.productsSlice)

 useEffect(() => {
  if (product?.id !== id || !product) {
   dispatch(setProductFetch(id))
  }
 }, [])

 return product
}