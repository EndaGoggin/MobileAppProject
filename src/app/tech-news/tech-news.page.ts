import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.page.html',
  styleUrls: ['./tech-news.page.scss'],
})
export class TechNewsPage implements OnInit {
  TechData:any=[];

  constructor(private newsService:NewsService, private tab: InAppBrowser) { }

  ngOnInit() {
    this.newsService.getTechData().subscribe(
      (data)=>{
        this.TechData = data.articles;
      }
    );
  }
   // InAppBrowser
  webPage(url:string){
    const browser = this.tab.create(url);
  }
}

