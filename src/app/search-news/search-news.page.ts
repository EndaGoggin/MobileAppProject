import { Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.page.html',
  styleUrls: ['./search-news.page.scss'],
})
export class SearchNewsPage implements OnInit{
  // variables for articles and search item
  News:any = [];
  searchTitle:string = "";
  
  constructor(private newsService:NewsService, private tab: InAppBrowser) { }

  ngOnInit(){
    this.newsService.getHomeData().subscribe(
      (data)=>{
        this.News = data.articles;
      }
    );
  }

  // Function to pass in search item and get out articles with that item mentiones
  performSearch(){
    this.newsService.getSearchData(this.searchTitle).subscribe(
      (data)=>{
        this.News = data.articles;
        console.log(this.searchTitle);
      }
    );
  }
  // InAppBrowser
  webPage(url:string){
    const browser = this.tab.create(url);
  }
}
