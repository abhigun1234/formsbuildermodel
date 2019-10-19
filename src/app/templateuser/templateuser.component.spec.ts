import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateuserComponent } from './templateuser.component';

describe('TemplateuserComponent', () => {
  let component: TemplateuserComponent;
  let fixture: ComponentFixture<TemplateuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
