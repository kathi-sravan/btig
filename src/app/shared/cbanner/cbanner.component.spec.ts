import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbannerComponent } from './cbanner.component';

describe('CbannerComponent', () => {
  let component: CbannerComponent;
  let fixture: ComponentFixture<CbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
