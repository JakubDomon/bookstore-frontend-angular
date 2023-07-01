import { Book } from "./Book"
import { User } from "./User"

export class Reservation{
  id: number
  addDate: Date
  booksID: number[]
  user: User
  price: number
}
