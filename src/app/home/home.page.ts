import { Component } from '@angular/core';
import { NewsService } from '../Services/news.service'
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // variables for articles and firstname
  NewsData:any=[];
  firstname:string;
  constructor(private newsService:NewsService, private tab: InAppBrowser, private storage:Storage) {}

  ngOnInit() {
    // Gets firstname from local storage
    this.storage.get("firstname").then(
      (data)=>{
        this.firstname = data;
      }
    ).catch(
      (error)=>{
        console.log(error);
      }
    );
  
    // gets news articles for home page
    this.newsService.getHomeData().subscribe(
      (data)=>{
        this.NewsData = data.articles;
      }
    );
  }
  // Funtion for InAppBrowser
  webPage(url:string){
    const browser = this.tab.create(url);
  }
}
