import { FC } from 'react'
import s from './Textarea.module.scss'


interface IProps {
    label: string
    value: string
    setValue: (value: string) => void
    placeholder: string
    styles?: {
        h: string
    }
}

const Textarea: FC<IProps> = ({label, value, setValue, styles, placeholder}) => {
    return <form className={s.TextareaForm}>
        <label className={s.TextareaForm__label}>{label}</label>
        <textarea className={s.TextareaForm__value} value={value} placeholder={placeholder} onChange={(e) => {setValue(e.currentTarget.value)}} style={{
            height: styles?.h
        }}>
        </textarea>
    </form>
}


export default Textarea