import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/shared/model/book.model';
import { ServiceMainService } from 'src/app/shared/services/services-main.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  id:number;
  book:Book= new Book();

  constructor(private bookService:ServiceMainService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.bookService.getBookById(this.id).subscribe(res =>{
        this.book= res;
      },error =>console.log(error));
  }

  goBookList(){
    this.router.navigate(['/dashboard/inventory']);
  }

  onSubmit(){
    this.bookService.updateBook(this.id,this.book).subscribe(date =>{
      this.book;
    },error =>console.log(error));
  }

  discardChanges(){
    this.bookService.getBookById(this.id).subscribe(res =>{
      this.book= res;
    })
  }

}
