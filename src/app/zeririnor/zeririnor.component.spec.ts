import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeririnorComponent } from './zeririnor.component';

describe('ZeririnorComponent', () => {
  let component: ZeririnorComponent;
  let fixture: ComponentFixture<ZeririnorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeririnorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZeririnorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
