import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeplateComponent } from './teplate.component';

describe('TeplateComponent', () => {
  let component: TeplateComponent;
  let fixture: ComponentFixture<TeplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
