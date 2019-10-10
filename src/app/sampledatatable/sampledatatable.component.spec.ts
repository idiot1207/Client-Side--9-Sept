import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sampleDataTableComponent } from './sampledatatable.component';

describe('SampledatatableComponent', () => {
  let component: sampleDataTableComponent;
  let fixture: ComponentFixture<sampleDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sampleDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sampleDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
