import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/model/book.model';
import{ServiceMainService} from '../../shared/services/services-main.service'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  books:Book[];

  constructor(public service:ServiceMainService){}

  ngOnInit(): void {
    this.getBooksList();
  }

  private getBooksList(){
    this.service.getBooks().subscribe(data =>{this.books=data;});
  }

}
