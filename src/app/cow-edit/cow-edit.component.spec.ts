import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowEditComponent } from './cow-edit.component';

describe('CowEditComponent', () => {
  let component: CowEditComponent;
  let fixture: ComponentFixture<CowEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
