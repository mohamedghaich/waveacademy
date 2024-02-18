import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiqeComponent } from './equiqe.component';

describe('EquiqeComponent', () => {
  let component: EquiqeComponent;
  let fixture: ComponentFixture<EquiqeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquiqeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EquiqeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
