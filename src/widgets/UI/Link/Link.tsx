import { FC } from 'react'
import s from './Link.module.scss'
import { NavLink } from 'react-router-dom'

interface IProps {
 content: string
 href: string

 styles?: {
  fs?: string
  mg?: string
  display?: string
 }
}

const LinkUI: FC<IProps> = ({content, href, styles}) => {
 return <NavLink to={href} className={s.Link} style={{
  fontSize: styles?.fs,
  margin: styles?.mg,
  display: styles?.display
 }}>
  {content}
 </NavLink>
}


export default LinkUI