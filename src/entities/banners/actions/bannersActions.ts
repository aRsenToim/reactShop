import { AxiosError } from "axios"
import { AppDispatch } from "../../../app/appStore"
import { bannersApi } from "../api/bannersApi"
import { setBanners } from "../model/bannersSlice"
import { IBanner } from "../model/types"
import { setError } from "../../products"





export const getBannersFetch = () => {
 return (dispatch: AppDispatch) => {
  bannersApi.getBanners().then((data: IBanner[]) => {
   dispatch(setBanners(data))
  }).catch((error: Error | AxiosError) => {
   dispatch(setError(error.message))
  })
 }
}