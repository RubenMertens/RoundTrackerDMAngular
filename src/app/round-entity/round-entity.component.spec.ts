import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundEntityComponent } from './round-entity.component';

describe('RoundEntityComponent', () => {
  let component: RoundEntityComponent;
  let fixture: ComponentFixture<RoundEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
