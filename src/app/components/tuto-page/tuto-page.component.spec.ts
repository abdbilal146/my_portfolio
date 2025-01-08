import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutoPageComponent } from './tuto-page.component';

describe('TutoPageComponent', () => {
  let component: TutoPageComponent;
  let fixture: ComponentFixture<TutoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
