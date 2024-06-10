import { FC, useState } from "react";
import { Slider } from "../features/slider";
import { Catalog } from "../entities/products";
import { IProductCard } from "../entities/products/model/types";
import { useProductCards } from "../shared/hooks/useProductCards";
import Loader from "../widgets/loader/loader";





const Home: FC = () => {
 const productCards = useProductCards()
 const [searchInput, setSearchInput] = useState<string>('')

 const searchFilm = (array: IProductCard[], value: string) => {
  if (!value) return array
  return array?.filter((item) => {
   return item.title.toLowerCase().includes(value.toLowerCase())
  })
 }

 return <div>
  <Slider />
  {productCards ? <Catalog productCards={searchFilm(productCards ?? [], searchInput) ?? []} searchInput={searchInput} setSearchInput={(value: string) => setSearchInput(value)} /> : <Loader/>}
 </div>
}

export default Home