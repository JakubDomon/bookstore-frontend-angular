import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Opinion } from './models/Opinion';

@Injectable({
  providedIn: 'root'
})
export class BookOpinionsService {

  public constructor(private httpClient: HttpClient){}

  getBookOpinions(bookId: number): any{
    return this.httpClient.get<Array<Opinion>>(`${environment.apiUrl}opinion/${bookId}`)
  }
}
