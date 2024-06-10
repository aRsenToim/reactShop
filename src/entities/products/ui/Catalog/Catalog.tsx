import { FC } from 'react'
import s from './Catalog.module.scss'
import Search from '../../../../widgets/search/search'
import CardProduct from '../../../../widgets/CardProduct/CardProduct'
import { IProductCard } from '../../model/types'

interface IProps {
 productCards: IProductCard[]
 searchInput: string,
 setSearchInput: (value: string) => void,
}

const Catalog: FC<IProps> = ({productCards, searchInput, setSearchInput}) => {
 return <div className={s.Catalog}>
  <div className={s.Catalog__header}>
   <h1 className={s.Catalog__title}>New assortment:</h1>
   <Search searchInput={searchInput} setSearchInput={setSearchInput}/>
  </div>
  <div className={s.Catalog__cards}>
   {productCards.map(card => <CardProduct id={card.id} title={card.title} price={card.price} img={card.img} key={card.id}/>)}
  </div>
 </div>
}


export default Catalog