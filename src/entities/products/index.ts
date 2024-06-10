import productsSlice, { setProduct, setProductCards, setError } from "./model/productsSlice";
import Catalog from './ui/Catalog/Catalog'
import {setProductCardsFetch, setProductFetch} from './actions/productsAction'
import ProductComponent from './ui/ProductComponent/ProductComponent' 

export {productsSlice, setProduct, setProductCards, setError, Catalog, setProductCardsFetch, setProductFetch, ProductComponent}