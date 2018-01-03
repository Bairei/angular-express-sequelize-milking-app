import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkingComponent } from './milking.component';

describe('MilkingComponent', () => {
  let component: MilkingComponent;
  let fixture: ComponentFixture<MilkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
