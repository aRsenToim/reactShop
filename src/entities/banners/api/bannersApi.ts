import axios from "axios"
import { IBanner } from "../model/types"





export const bannersApi = {
 baseUrl: "https://6676d0df145714a1bd72e170.mockapi.io/",
 async getBanners() {
  const data = await axios.get<IBanner[]>(`${this.baseUrl}/banners`)
  return data.data
 }
}