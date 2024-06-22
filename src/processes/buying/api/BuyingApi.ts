import axios from "axios"
import { IContract } from "../../../entities/profile/model/types"





export const BuyingApi = {
 baseURL: "https://6676d0df145714a1bd72e170.mockapi.io/",
 async addOrder(orders: IContract) {
  console.log(orders);
  
  const data = await axios.post(`${this.baseURL}Orders`, orders)
  return data.data
 }
}