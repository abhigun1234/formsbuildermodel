import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivencComponent } from './modeldrivenc.component';

describe('ModeldrivencComponent', () => {
  let component: ModeldrivencComponent;
  let fixture: ComponentFixture<ModeldrivencComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeldrivencComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldrivencComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
