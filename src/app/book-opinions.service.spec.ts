import { TestBed } from '@angular/core/testing';

import { BookOpinionsService } from './book-opinions.service';

describe('BookOpinionsService', () => {
  let service: BookOpinionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookOpinionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
