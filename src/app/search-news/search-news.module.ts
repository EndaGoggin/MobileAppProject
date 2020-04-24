import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchNewsPageRoutingModule } from './search-news-routing.module';

import { SearchNewsPage } from './search-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchNewsPageRoutingModule
  ],
  declarations: [SearchNewsPage]
})
export class SearchNewsPageModule {}
