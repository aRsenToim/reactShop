import { FC } from 'react'
import s from './banners.module.scss'
import { IBanner } from '../../model/types'
import Banner from '../../../../widgets/banner/banner'


interface IProps {
 banners: IBanner[]
 close: (id: number) => void
} 

const Banners: FC<IProps> = ({banners, close}) => {
 
 return <div className={s.Banners}>
  {banners.map((banner: IBanner) => <Banner key={banner.id} close={() => {close(banner.id)}} title={banner.title} desc={banner.desc} img={banner.img}/>)}
 </div>
}


export default Banners