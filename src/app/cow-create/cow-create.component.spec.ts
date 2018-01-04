import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowCreateComponent } from './cow-create.component';

describe('CowCreateComponent', () => {
  let component: CowCreateComponent;
  let fixture: ComponentFixture<CowCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
