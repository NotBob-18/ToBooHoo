import { TestBed } from '@angular/core/testing';

import { EditListService } from './edit-list.service';

describe('EditListService', () => {
  let service: EditListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
