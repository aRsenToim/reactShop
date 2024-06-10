import { FC } from 'react'
import s from './button.module.scss'

interface IProps {
 title: string
 color?: string
 onclick: () => void
 bg_color?: string
 mg?: string
 width?: string
}

const Button: FC<IProps> = ({title, mg, onclick, color, bg_color, width}) => {
 return <button className={s.Button} onClick={onclick} style={{
  color,
  backgroundColor: bg_color,
  margin: mg,
  width,
 }}>
  {title}
 </button>
}


export default Button