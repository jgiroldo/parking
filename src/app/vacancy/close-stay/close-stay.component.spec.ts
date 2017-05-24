import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseStayComponent } from './close-stay.component';

describe('CloseStayComponent', () => {
  let component: CloseStayComponent;
  let fixture: ComponentFixture<CloseStayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseStayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseStayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
