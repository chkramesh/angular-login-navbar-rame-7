import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosLineComponent } from './pos-line.component';

describe('PosLineComponent', () => {
  let component: PosLineComponent;
  let fixture: ComponentFixture<PosLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
