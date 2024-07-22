import axios from "axios"
import { IAccordionItem } from "../model/types"



export const faqApi = {
    baseURL: "https://669e0ef19a1bda3680053a8c.mockapi.io/",
    async getAccordionItems(){
        const data = await axios.get<IAccordionItem[]>(`${this.baseURL}/AccordionItems`)
        return data.data
    }
}

