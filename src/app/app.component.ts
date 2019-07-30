import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  baseURL: string;
  products: any[];
  bookDetail:any[];
  bookUrl:string;
  constructor(private router:Router,private _httpclient: HttpClient) { }

  ngOnInit() {
    this.baseURL="https://www.anapioficeandfire.com/api/books";
    this._httpclient.get(this.baseURL).subscribe((res : any[])=>{
      this.products = res;
      console.log(res);
      });
  }

  getBookDeatails(x :any){
    this.bookUrl = x;
    this._httpclient.get(this.bookUrl).subscribe((res : any[])=>{
      this.bookDetail = res;
      console.log(this.bookDetail);
      });
  }

}
