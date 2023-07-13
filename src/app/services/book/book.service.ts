import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }


  getAll():string[]{
    return[
      '/assets/book-1.jpg',
      '/assets/book-2.jpg',
      '/assets/book-3.jpg',
      '/assets/book-4.jpg',
      '/assets/book-5.jpg',
      '/assets/book-6.jpg',
      '/assets/book-7.jpg',
      '/assets/book-8.jpg',
    ]
  }
}


