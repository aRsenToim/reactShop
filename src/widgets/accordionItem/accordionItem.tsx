import { FC, useState } from 'react'
import s from './accordionItem.module.scss'


interface IAccordionItem {
 title: string
 content: string
}

const AccordionItem: FC<IAccordionItem> = ({ title, content }) => {
 const [isOpen, setIsOpen] = useState<boolean>(false)
 return <div className={s.AccordionItem}>
  <div className={s.AccordionItem__header} onClick={() => {setIsOpen(prev => prev ? false : true)}}>
   {title}
  </div>
  {isOpen ? <div className={s.AccordionItem__content}>
   {content}
  </div> : undefined}
 </div>
}


export default AccordionItem