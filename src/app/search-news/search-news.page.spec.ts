import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchNewsPage } from './search-news.page';

describe('SearchNewsPage', () => {
  let component: SearchNewsPage;
  let fixture: ComponentFixture<SearchNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
