import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TowwayComponent } from './towway.component';

describe('TowwayComponent', () => {
  let component: TowwayComponent;
  let fixture: ComponentFixture<TowwayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TowwayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TowwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
