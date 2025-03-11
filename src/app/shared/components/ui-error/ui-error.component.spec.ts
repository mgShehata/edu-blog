import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiErrorComponent } from './ui-error.component';

describe('UiErrorComponent', () => {
  let component: UiErrorComponent;
  let fixture: ComponentFixture<UiErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
