import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  DevTools,
  Tolgee,
  TOLGEE_INSTANCE,
  FormatSimple,
} from '@tolgee/ngx';

import { environment } from '../environments/environment.prod';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    
    (TranslateModule.forRoot({
      defaultLanguage: 'fr', 
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }).providers as []),

    /*{
      provide: TOLGEE_INSTANCE,
      useFactory: () => {
        return Tolgee()
          .use(DevTools()) // Optional: Enables in-context translation during development
          .use(FormatSimple()) // Optional: Enables simple formatting
          .init({
            language: 'fr', // Set your default language
            apiUrl: environment.tolgeeApiUrl, // Define your Tolgee API URL in environment.ts
            apiKey: environment.tolgeeApiKey,
            staticData:{
              fr: () => import('../assets/i18n/fr.json'), // Example
              en: () => import('../assets/i18n/en.json'),
            } // Define your Tolgee API key in environment.ts
          });
      },
    },
    importProvidersFrom(RouterModule.forRoot([])),*/
    
    
    
    
  ]
};