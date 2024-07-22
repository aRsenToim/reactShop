import { FC } from 'react'
import s from './button.module.scss'

interface IProps {
 title: string
 styles?: {
    color?: string
    bg_color?: string
    mg?: string
    width?: string
 }
 onclick: () => void
}

const Button: FC<IProps> = ({title, styles, onclick}) => {
 return <button className={s.Button} onClick={onclick} style={{
  color: styles?.color,
  backgroundColor: styles?.bg_color,
  margin: styles?.mg,
  width: styles?.width,
 }}>
  {title}
 </button>
}


export default Button