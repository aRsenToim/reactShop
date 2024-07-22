import React, { FC } from 'react'
import s from './text.module.scss'

interface IProps {
}

const Text: FC<IProps> = ({children}) => {
 return <div className={s.Text}>
  {children}
 </div>
}


export default Text