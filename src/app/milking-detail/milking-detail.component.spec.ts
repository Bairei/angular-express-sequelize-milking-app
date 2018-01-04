import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkingDetailComponent } from './milking-detail.component';

describe('MilkingDetailComponent', () => {
  let component: MilkingDetailComponent;
  let fixture: ComponentFixture<MilkingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
