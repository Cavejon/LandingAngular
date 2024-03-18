import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCoinComponent } from './grade-coin.component';

describe('GradeCoinComponent', () => {
  let component: GradeCoinComponent;
  let fixture: ComponentFixture<GradeCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GradeCoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GradeCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
