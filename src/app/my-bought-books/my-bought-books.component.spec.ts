import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBoughtBooksComponent } from './my-bought-books.component';

describe('MyBoughtBooksComponent', () => {
  let component: MyBoughtBooksComponent;
  let fixture: ComponentFixture<MyBoughtBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBoughtBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBoughtBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
