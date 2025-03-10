import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import{ provideAnimationsAsync} from '@angular/platform-browser/animations/async'
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideAnimationsAsync(),{
    provide: IMAGE_CONFIG,
    useValue: {
      disableImageSizeWarning: true, 
      disableImageLazyLoadWarning: true
    }
  }, provideAnimationsAsync(), provideAnimationsAsync(),
  
]
};
