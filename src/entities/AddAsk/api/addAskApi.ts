import axios from "axios"
import { IAsk } from "../model/types"





export const AddAskApi = {
    baseUrl: "1https://669e0ef19a1bda3680053a8c.mockapi.io/",
    addAsk(ask: IAsk){
        const data = axios.post(`${this.baseUrl}/AddAsk`, ask)
        return data
    }
}
