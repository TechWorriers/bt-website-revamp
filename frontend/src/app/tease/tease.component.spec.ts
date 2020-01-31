import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaseComponent } from './tease.component';

describe('TeaseComponent', () => {
  let component: TeaseComponent;
  let fixture: ComponentFixture<TeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
