import { FC, useEffect } from "react"
import Accordion from "../widgets/accordion/accordion"
import Title from "../widgets/UI/Title/title"
import { LinkUI, Text } from "../widgets/UI"
import { useAppDispatch, useAppSelector } from "../app/appStore"
import { getAccordionItemsFetch } from "../entities/faq"
import Loader from "../widgets/loader/loader"




const Faq: FC = () => {
    const AccordionItems = useAppSelector(state => state.faqSlice.AccordionItems)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!AccordionItems) {
            dispatch(getAccordionItemsFetch())
        }
    })

    return <div style={{ margin: "10px", textAlign: "center" }}>
        <Title title="FAQ:" />
        {AccordionItems ? <Accordion items={AccordionItems} /> : <Loader />}
        <Text>Остались вопросы? <LinkUI href='/addask' content='Задать вопрос' /></Text>
    </div>
}


export default Faq