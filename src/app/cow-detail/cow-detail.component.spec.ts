import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CowDetailComponent } from './cow-detail.component';

describe('CowDetailComponent', () => {
  let component: CowDetailComponent;
  let fixture: ComponentFixture<CowDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CowDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CowDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
