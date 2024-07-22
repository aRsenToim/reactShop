import { FC } from 'react'
import s from './accordion.module.scss'
import AccordionItem from '../accordionItem/accordionItem'
import { IAccordionItem } from '../../entities/faq/model/types'


interface IProps {
 items: IAccordionItem[]
}

const Accordion: FC<IProps> = ({ items }) => {
 return <div className={s.Accordion}>
  {items.map((item) => <AccordionItem key={item.id} title={item.title} content={item.content} />)}
 </div>
}


export default Accordion