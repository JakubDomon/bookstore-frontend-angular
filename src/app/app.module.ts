import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AvailableBooksComponent } from './available-books/available-books.component';
import { MyBoughtBooksComponent } from './my-bought-books/my-bought-books.component';
import { RouterModule } from '@angular/router';
import { BookListItemComponent } from './books/book-list-item/book-list-item.component';
import { BookCategoriesComponent } from './books/book-categories/book-categories.component';
import { BookCategoryFilterPipe } from './pipes/book-category-filter.pipe';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookOpinionsComponent } from './books/book-detail/book-opinions/book-opinions.component';
import { BookListComponent } from './my-bought-books/book-list/book-list.component';
import { SummaryComponent } from './my-bought-books/summary/summary.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-page/login-form/login-form.component';
import { RegisterFormComponent } from './login-page/register-form/register-form.component';
import { ModalComponent } from './modal/modal.component';
import { AuthorizationService } from './authorization.service';
import { CategoryAddComponent } from './category-add/category-add.component';
import { BookAddComponent } from './book-add/book-add.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { LastReservationsComponent } from './last-reservations/last-reservations.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    FooterComponent,
    AvailableBooksComponent,
    MyBoughtBooksComponent,
    BookListItemComponent,
    BookCategoriesComponent,
    BookCategoryFilterPipe,
    BookDetailComponent,
    BookOpinionsComponent,
    BookListComponent,
    SummaryComponent,
    NotFoundComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ModalComponent,
    CategoryAddComponent,
    BookAddComponent,
    LastReservationsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'availablebooks', component: AvailableBooksComponent },
      { path: 'boughtbooks', component: MyBoughtBooksComponent },
      { path: 'bookdetails/:id', component: BookDetailComponent},
      { path: 'createBook', component: BookAddComponent},
      { path: 'createCategory', component: CategoryAddComponent},
      { path: 'login', component: LoginPageComponent },
      { path: 'home' , redirectTo: '/availablebooks'},
    ]),
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {

}
