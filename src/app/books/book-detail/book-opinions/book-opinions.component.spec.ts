import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpinionsComponent } from './book-opinions.component';

describe('BookOpinionsComponent', () => {
  let component: BookOpinionsComponent;
  let fixture: ComponentFixture<BookOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookOpinionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
