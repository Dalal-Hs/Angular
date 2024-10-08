import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoiceComponent } from './inoice.component';

describe('InoiceComponent', () => {
  let component: InoiceComponent;
  let fixture: ComponentFixture<InoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
