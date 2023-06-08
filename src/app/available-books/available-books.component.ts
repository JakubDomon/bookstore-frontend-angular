import { Component } from '@angular/core';

@Component({
  selector: 'app-available-books',
  templateUrl: './available-books.component.html',
  styleUrls: ['./available-books.component.css']
})
export class AvailableBooksComponent {
  availableBooks = [
    { id: 1, title: 'W pustyni i w puszczy', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni',  image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
  ]

  bookCategories = [
    { id: 1, name: 'Przygodowe' },
    { id: 1, name: 'Kryminalne' },
    { id: 1, name: 'Thrillery' },
    { id: 1, name: 'Test' },
  ]
}
