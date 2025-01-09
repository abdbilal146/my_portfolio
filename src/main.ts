import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule, ROUTES } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent,appConfig)
  .catch((err) => console.error(err));
