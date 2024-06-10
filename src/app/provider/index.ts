import React from "react"
import Home from "../../pages/Home"
import Product from "../../pages/product"
import Basket from "../../pages/Basket"
import Profile from "../../pages/Profile"
import Buying from "../../pages/Buying"
import Success from "../../pages/success"
import ErrorPage from "../../pages/error"



export interface IRoute {
 path: string
 element: React.ElementType
}


enum RoutesNames {
 Home = '/',
 Product = '/product/:id',
 Basket = '/basket',
 Profile = '/profile',
 Buying = '/Buying',
 Success = '/success',
 Error = '/*'
}

export const routes: IRoute[] = [
 {
  path: RoutesNames.Home,
  element: Home
 },
 {
  path: RoutesNames.Product,
  element: Product
 },
 {
  path: RoutesNames.Error,
  element: ErrorPage
 },
 {
  path: RoutesNames.Basket,
  element: Basket
 },
 {
  path: RoutesNames.Profile,
  element: Profile
 },
]

export const specialRoutes: IRoute[] = [
 {
  path: RoutesNames.Buying,
  element: Buying
 },
 {
  path: RoutesNames.Success,
  element: Success
 },
]