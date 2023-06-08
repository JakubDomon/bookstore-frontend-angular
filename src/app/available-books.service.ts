import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvailableBooksService {

  getAvailableBooks(){
    return of([
      { id: 1, title: 'W pustyni i w puszczy', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni',  image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
      { id: 2, title: 'Stary człowiek i morze', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque labore sunt incidunt exercitationem praesentium nesciunt quam harum repellendus ad ipsa tenetur optio, pariatur amet error tempore eum vero, reprehenderit sed!', shortDescription: 'W pustyni', image: 'assets/images/books/img.jpg' },
    ])
  }

  constructor() { }
}
