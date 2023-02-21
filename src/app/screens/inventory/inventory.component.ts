import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/model/book.model';
import{ServiceMainService} from '../../shared/services/services-main.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  books:Book[];

  constructor(public service:ServiceMainService,private router:Router){}


  private getBooksList(){
    this.service.getBooks().subscribe(data =>{this.books=data;});
  }

  bookDetail(id:number){
    this.router.navigate(['dashboard/inventory/book-detail/',id]);
  }

  deleteBook(id:number){
    this.service.deleteBook(id).subscribe(data=>{
      console.log(data);
      this.getBooksList();
    })
  }

  ngOnInit(): void {
    this.getBooksList();
  }

}
