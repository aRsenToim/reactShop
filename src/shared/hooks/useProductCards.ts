import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/appStore";
import { setProductCardsFetch } from "../../entities/products";




export function useProductCards() {
 const dispatch = useAppDispatch()
 const { productCards } = useAppSelector(state => state.productsSlice)

 useEffect(() => {
  if (!productCards) {
   dispatch(setProductCardsFetch())
  }
 }, [])

 return productCards
}