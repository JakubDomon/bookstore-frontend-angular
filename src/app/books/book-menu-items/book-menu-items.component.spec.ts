import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMenuItemsComponent } from './book-menu-items.component';

describe('BookMenuItemsComponent', () => {
  let component: BookMenuItemsComponent;
  let fixture: ComponentFixture<BookMenuItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookMenuItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
