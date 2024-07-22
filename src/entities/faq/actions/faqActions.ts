import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { faqApi } from "../api/faqApi"
import { setAccordionItems } from "../model/faqSlice"
import { IAccordionItem } from "../model/types"




export const getAccordionItemsFetch = () => {
    return (dispatch: AppDispatch) => {
        faqApi.getAccordionItems().then((data: IAccordionItem[]) => {
            dispatch(setAccordionItems(data))
        }).catch((err: Error | AxiosError) => {})
    }
}