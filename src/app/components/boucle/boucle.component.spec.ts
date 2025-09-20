import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoucleComponent } from './boucle.component';

describe('BoucleComponent', () => {
  let component: BoucleComponent;
  let fixture: ComponentFixture<BoucleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoucleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoucleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
