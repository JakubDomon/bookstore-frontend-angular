import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent {
  @Input() bookTitle: string = '';
  @Input() bookDesc: string = '';
  @Input() bookShortDesc: string = '';
  @Input() bookImageSrc: string = '';
}
