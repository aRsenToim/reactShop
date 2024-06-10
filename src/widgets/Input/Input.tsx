import { FC } from 'react'
import s from './Input.module.scss'


interface IProps {
 placeholder: string
 text: string
 setText: (value: string) => void
 label: string
}

const Input: FC<IProps> = ({placeholder, text, setText, label}) => {
 return <div className={s.input}>
  <label className={s.input__label}>{label}</label>
  <input className={s.input__value} onChange={(e) => {setText(e.currentTarget.value)}} value={text} type="text" placeholder={placeholder} />
 </div>
}

export default Input