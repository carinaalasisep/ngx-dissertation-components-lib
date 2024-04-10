import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIsepDissertationComponentsComponent } from './ngx-isep-dissertation-components.component';

describe('NgxIsepDissertationComponentsComponent', () => {
  let component: NgxIsepDissertationComponentsComponent;
  let fixture: ComponentFixture<NgxIsepDissertationComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxIsepDissertationComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxIsepDissertationComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
