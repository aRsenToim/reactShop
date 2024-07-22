import { FC, useState } from "react"
import Accordion from "../widgets/accordion/accordion"
import Title from "../widgets/UI/Title/title"
import { IAccordionItem } from "../entities/faq/types/types"
import { LinkUI, Text } from "../widgets/UI"




const Faq: FC = () => {
 const [items] = useState<IAccordionItem[]>([
  {
   title: "What is this all for?",
   content: "Defiant, expensive, prestigious - these are the concepts that guide the slaves of fashion. Our products are a gesture of disrespect towards people of the glamorous mind."
  },
  {
   title: "Why so expensive?",
   content: "We use some of the most expensive fabrics and materials in our products, while the entire market is aimed at low-cost production."
  },
  {
   title: "What exactly makes your product different from others?",
   content: "Courage, first of all. We don't care what it says on the T-shirt. The main thing is convenience. We are picky about all the little things and our tags are proof of this. Also, the goods are accompanied by the original signature of Alexey Shevtsov, reflecting our concern for the buyer."
  },
  {
   title: "What about the quality?",
   content: "We don't make anything we wouldn't use ourselves."
  },
 ])
 return <div style={{margin: "10px", textAlign: "center"}}>
  <Title title="FAQ:"/>
  <Accordion items={items}/>
  <Text>Остались вопросы? <LinkUI href='/addask' content='Задать вопрос' /></Text>
 </div>
}


export default Faq