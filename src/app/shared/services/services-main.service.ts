import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  private url:string=environment.ApiUrl;
  constructor(private httpClient:HttpClient) { }

// este método sirve para obtener los libros
  getBooks():Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.url}`)
  }

}
