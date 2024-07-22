import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccordionItem } from "./types";

interface IinitialState {
    AccordionItems: IAccordionItem[] | null
}

const initialState: IinitialState = {
    AccordionItems: null
}

const faqSlice = createSlice({
    name: "faqSlice",
    initialState,
    reducers: {
        setAccordionItems(state, action: PayloadAction<IAccordionItem[]>){
            state.AccordionItems = action.payload
        }
    }
})



export default faqSlice.reducer
export const {setAccordionItems} = faqSlice.actions