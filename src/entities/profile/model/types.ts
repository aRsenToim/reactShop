


export interface IContract {
 id: string
 sum: number
 user: {
  name: string
  lastname: string
  email: string
  location: string
 },
 orders: IBasket[]
 date: Date | null
}

export interface IOrder {
 id: string
 title: string
 price: number
 img: string[]
 size: number
}


export interface IBasket {
 id: string
 title: string
 price: number
 img: string[]
 size: number
}