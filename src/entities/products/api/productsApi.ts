import axios from "axios"
import { IProduct, IProductCard } from "../model/types"




export const productsApi = {
 baseUrl: "https://6660b9d05425580055b505be.mockapi.io/",
 async getProductCards(){
  const data = await axios.get<IProductCard[]>(`${this.baseUrl}/productCards`)
  return data.data
 },
 async getProduct(id: string){
  const data = await axios.get<IProduct>(`${this.baseUrl}/products/${id}`)
  return data.data
 }
}