import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechNewsPage } from './tech-news.page';

describe('TechNewsPage', () => {
  let component: TechNewsPage;
  let fixture: ComponentFixture<TechNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
