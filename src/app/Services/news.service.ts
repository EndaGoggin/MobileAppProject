import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  // Api pull for home page
  getHomeData():Observable<any>{
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=c589e6746d0645268ee2b8ab2b496397');
  }
  // Api pull for tech page
  getTechData():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&category=technology&apiKey=c589e6746d0645268ee2b8ab2b496397');
  }
  // Api pull for seach page
  getSearchData(title:string):Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/everything?q=' + title + '&from=2020-04-23&sortBy=popularity&apiKey=c589e6746d0645268ee2b8ab2b496397');
   }

  
}
