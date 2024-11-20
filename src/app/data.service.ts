import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected http: HttpClient) { }
  getNewsArticle(options:any){
    return this.http.get(`https://newsapi.org/v2/everything?q=${options.q}&language=hi&sortBy=publishedAt&apiKey=77ad79148aa647c9bdec33173ad2d7c2`);
  }
}
