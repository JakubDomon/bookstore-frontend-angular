import { Book } from "./Book"
import { User } from "./User"

export class Opinion{
  id: number
  text: string
  rating: number
  author: User
  book: Book
}
