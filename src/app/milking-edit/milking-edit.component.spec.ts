import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilkingEditComponent } from './milking-edit.component';

describe('MilkingEditComponent', () => {
  let component: MilkingEditComponent;
  let fixture: ComponentFixture<MilkingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilkingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilkingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
