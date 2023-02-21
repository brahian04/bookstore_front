import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { sequenceEqual } from 'rxjs';
import { Book } from 'src/app/shared/model/book.model';
import { ServiceMainService } from 'src/app/shared/services/services-main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  book:Book= new Book();
  url:string;

  constructor(public service:ServiceMainService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.visibilityCreateBook();
    console.log(this.url);
  }

  createBook(){
    this.service.registerBook(this.book).subscribe(res =>{
      console.log(res);
    },error =>console.log(error));
    location.reload;
  }

  visibilityCreateBook(){
    this.url=location.pathname;
    if(this.url== '/dashboard/inventory'){
      return true;
    }else{
      return false;
    }
  }

}
