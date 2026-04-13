import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LugarComponent } from './lugar.component';

describe('LugarComponent', () => {
  let component: LugarComponent;
  let fixture: ComponentFixture<LugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LugarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LugarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
