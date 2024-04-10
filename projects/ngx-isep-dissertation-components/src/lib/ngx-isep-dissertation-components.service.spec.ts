import { TestBed } from '@angular/core/testing';

import { NgxIsepDissertationComponentsService } from './ngx-isep-dissertation-components.service';

describe('NgxIsepDissertationComponentsService', () => {
  let service: NgxIsepDissertationComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIsepDissertationComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
