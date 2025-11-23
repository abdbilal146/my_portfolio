import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperiencePageComponent } from './experience-page.component';
import { TranslateModule } from '@ngx-translate/core';

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePageComponent, TranslateModule.forRoot()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
