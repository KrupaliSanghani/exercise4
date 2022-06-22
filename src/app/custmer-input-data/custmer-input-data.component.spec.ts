import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustmerInputDataComponent } from './custmer-input-data.component';

describe('CustmerInputDataComponent', () => {
  let component: CustmerInputDataComponent;
  let fixture: ComponentFixture<CustmerInputDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustmerInputDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustmerInputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
