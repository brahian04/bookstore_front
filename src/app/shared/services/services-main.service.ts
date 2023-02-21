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
  
  // este método sirve para obtener un libro por id
  getBookById(id:number):Observable<Book>{
    return this.httpClient.get<Book>(`${this.url}/${id}`);
  }
  
  // este método sirve para registrar libros
  registerBook(book:Book):Observable<Object>{
    return this.httpClient.post(`${this.url}`,book);
  }

  // este método sirve para actualizar información de los libros
  updateBook(id:number,book:Book):Observable<Object>{
    return this.httpClient.put(`${this.url}/${id}`,book);
  }

  deleteBook(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.url}/${id}`);
  }

}
