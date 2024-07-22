import { FC } from 'react'
import s from './title.module.scss'

interface IProps {
 title: string
}

const Title: FC<IProps> = ({title}) => {
 return <h1 className={s.Title}>{title}</h1>
}


export default Title