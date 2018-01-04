import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkingCreateComponent } from './milking-create.component';

describe('MilkingCreateComponent', () => {
  let component: MilkingCreateComponent;
  let fixture: ComponentFixture<MilkingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
