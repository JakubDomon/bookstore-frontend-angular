import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { MyBoughtBooksComponent } from './my-bought-books/my-bought-books.component';
import { RouterModule } from '@angular/router';
import { BookListItemComponent } from './books/book-list-item/book-list-item.component';
import { BookMenuItemsComponent } from './books/book-menu-items/book-menu-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    AvailableBooksComponent,
    MyBoughtBooksComponent,
    BookListItemComponent,
    BookMenuItemsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'availablebooks', component: AvailableBooksComponent },
      { path: 'boughtbooks', component: MyBoughtBooksComponent },
      // Book categories routes
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
