import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { IRoute, routes, specialRoutes } from "."
import BaseLayout from "../layouts/baseLayout/baseLayout"
import SpecialLayout from "../layouts/specialLayout/specialLayout"




const RoutesApp: FC = () => {
 return <Routes>
  <Route path="/" element={<BaseLayout />}>
   {routes.map((route: IRoute) => <Route path={route.path} key={route.path} element={<route.element />} />)}
  </Route>
  <Route path="/" element={<SpecialLayout />}>
   {specialRoutes.map(((route: IRoute) => <Route path={route.path} key={route.path} element={<route.element />} />))}
  </Route>
 </Routes>
}


export default RoutesApp