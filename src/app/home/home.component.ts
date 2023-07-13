import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books:string[]=[];

  constructor(private bs:BookService) {}

  ngOnInit(): void{
    this.books = this.bs.getAll();
  }


}
