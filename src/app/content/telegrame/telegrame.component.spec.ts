import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegrameComponent } from './telegrame.component';

describe('TelegrameComponent', () => {
  let component: TelegrameComponent;
  let fixture: ComponentFixture<TelegrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelegrameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelegrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
