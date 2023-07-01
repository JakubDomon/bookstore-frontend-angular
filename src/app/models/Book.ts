import { Category } from "./Category"
import { Opinion } from "./Opinion"

export class Book{
  id: number
  title: string
  author: string
  description: string
  shortdescription: string
  image: string
  price: number
  opinion: number
  categoryID: number
}
